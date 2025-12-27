const express = require('express');
const router = express.Router();

const {
    createAnnouncement,
    listAnnouncements,
    getAnnouncement,
    updateAnnouncement
} = require('../controllers/announcement-controller');

router.post('/create', createAnnouncement);
router.get('/list', listAnnouncements);
router.get('/get', getAnnouncement);
router.patch('/update', updateAnnouncement);


module.exports = router;
