const express = require('express');
const router = express.Router();

const {
    createAnnouncement,
    listAnnouncements,
} = require('../controllers/announcement-controller');

router.post('/create', createAnnouncement);
router.get('/list', listAnnouncements);


module.exports = router;
