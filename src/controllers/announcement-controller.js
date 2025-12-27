const AnnouncementModel = require('../models/announcement-model');

// POST /api/announcements
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

// GET /api/announcements?category=&search=
exports.listAnnouncements = async (req, res) => {
    try {
        const announcements = await AnnouncementModel.find().sort({ publicationDate: -1 });

        res.json(announcements);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error });
    }
};
