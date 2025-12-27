const AnnouncementModel = require('../models/announcement-model');

async function getAnnouncementObject(req, res) {
    let announcement;
    try {
        announcement = await AnnouncementModel.findById(req.body.id);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ID', error: error });
    }

    if (!announcement) {
        return res.status(404).json({ message: 'Not found', id: req.body.id });
    }

    return announcement;
}

// POST /api/announcement/create
exports.createAnnouncement = async (req, res) => {
    const { title, content, category } = req.body;
    const actualDate = new Date();

    try {
        const announcement = await AnnouncementModel.create({
            title,
            content,
            category,
            publicationDate: actualDate,
            lastUpdate: actualDate
        });

        res.status(200).json(announcement);
    } catch (error) {
        res.status(400).json({ message: 'Bad request', error: error });
    }
};

// GET /api/announcement/list
exports.listAnnouncements = async (req, res) => {
    const { category, search } = req.body;
    const filter = {};

    if (category) {
        filter.category = { $all: category }
    }

    if (search) {
        filter.$or = [
            { title: { $regex: search, $options: 'i' } },
            { content: { $regex: search, $options: 'i' } }
        ];
    }

    try {
        const announcements = await AnnouncementModel.find(filter).sort({ publicationDate: -1 });
        res.json(announcements);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error });
    }
};

// GET /api/announcement/get/:id
exports.getAnnouncement = async (req, res) => {
    const announcement = await getAnnouncementObject(req, res);

    res.json(announcement);
};

// UPDATE /api/announcement/update
exports.updateAnnouncement = async (req, res) => {
    const announcement = await getAnnouncementObject(req, res);

    const updateObject = {
      title: req.body.title ?? announcement.title,
      content: req.body.content ?? announcement.content,
      category: req.body.category ?? announcement.category,
      publicationDate: req.body.publicationDate ?? announcement.publicationDate,
      lastUpdate: new Date(),
    }

    try {
        const updated = await AnnouncementModel.findByIdAndUpdate(
            req.body.id,
            updateObject,
            { new: true }
        );

        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: 'Update failed', error: error });
    }
};

// DELETE /api/announcement/delete
exports.deleteAnnouncement = async (req, res) => {
    await getAnnouncementObject(req, res);

    try {
        await AnnouncementModel.findByIdAndDelete(req.body.id);
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Delete failed' });
    }
};