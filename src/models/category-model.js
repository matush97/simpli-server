const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        value: {
            type: String,
            required: true,
            trim: true
        },
        label: {
            type: String,
            required: true
        }
    },
);

module.exports = mongoose.model('CategoryModel', categorySchema);