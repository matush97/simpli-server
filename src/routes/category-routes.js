const express = require('express');
const router = express.Router();

const {
    createCategory,
    listCategory
} = require("../controllers/category-controller")

router.post('/create', createCategory);
router.get('/list', listCategory);

module.exports = router;