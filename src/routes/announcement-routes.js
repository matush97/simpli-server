const express = require('express');
const router = express.Router();

const {
    createAnnouncement,
    listAnnouncements,
    getAnnouncement,
    updateAnnouncement,
    deleteAnnouncement
} = require('../controllers/announcement-controller');

router.post('/create', createAnnouncement);
router.get('/list', listAnnouncements);
router.get('/get/:id', getAnnouncement);
router.patch('/update', updateAnnouncement);
router.delete('/delete', deleteAnnouncement);


module.exports = router;
