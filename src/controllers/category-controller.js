const CategoryModel = require("../models/category-model");

// POST /api/category/create
exports.createCategory = async (req, res) => {
    const {itemList} = req.body;

    try {
        const categories = await CategoryModel.insertMany(itemList);
        res.status(201).json(categories);
    } catch (e) {
        res.status(400).json({message: 'Bad request', error: e});
    }
}

// GET /api/category/list
exports.listCategory = async (req, res) => {
    try {
        const categoryList = await CategoryModel.find();
        res.json(categoryList);
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error});
    }
}