const express = require('express');
const router = express.Router();

const {
    createAnnouncement,
    listAnnouncements,
    getAnnouncementById
} = require('../controllers/announcement-controller');

router.post('/create', createAnnouncement);
router.get('/list', listAnnouncements);
router.get('/get', getAnnouncementById);


module.exports = router;
