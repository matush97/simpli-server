const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true
        },
        category: {
            type: Array,
            required: true
        },
        publicationDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        lastUpdate: {
            type: Date,
            required: true,
            default: Date.now
        }
    },
);

announcementSchema.index({title: "text", content: "text"});

module.exports = mongoose.model('AnnouncementModel', announcementSchema);
