const AnnouncementModel = require('../models/announcement-model');

// POST /api/announcement/create
exports.createAnnouncement = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const actualDate = new Date();

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
    let announcements;
    try {
        announcements = await AnnouncementModel.find().sort({ publicationDate: -1 });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error });
    }

    res.json(announcements);
};

// GET /api/announcement/get/:id
exports.getAnnouncementById = async (req, res) => {
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
