const AnnouncementModel = require('../models/announcement-model');

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
    try {
        const announcements = await AnnouncementModel.find().sort({ publicationDate: -1 });
        res.json(announcements);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error });
    }
};

// GET /api/announcement/get/:id
exports.getAnnouncement = async (req, res) => {
    let announcement;
    try {
        announcement = await AnnouncementModel.findById(req.body.id);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ID', error: error });
    }

    if (!announcement) {
        return res.status(404).json({ message: 'Not found' });
    }

    res.json(announcement);
};

// UPDATE /api/announcement/update
exports.updateAnnouncement = async (req, res) => {
    let announcement;
    try {
        announcement = await AnnouncementModel.findById(req.body.id);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ID', error: error });
    }

    if (!announcement) {
        return res.status(404).json({ message: 'Announcement by ID does not exist' });
    }

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
            updateObject
        );

        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: 'Update failed', error: error });
    }
};

// DELETE /api/announcement/delete
exports.deleteAnnouncement = async (req, res) => {
    let announcement;
    try {
        announcement = await AnnouncementModel.findById(req.body.id);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ID', error: error });
    }

    if (!announcement) {
        return res.status(404).json({ message: 'Not found' });
    }

    try {
        await AnnouncementModel.findByIdAndDelete(req.body.id);
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Delete failed' });
    }
};