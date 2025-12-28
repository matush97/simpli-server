const express = require('express');
const cors = require('cors');

const announcementRoutes = require('./routes/announcement-routes');
const categoryRoutes = require('./routes/category-routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/announcement', announcementRoutes);
app.use('/api/category', categoryRoutes);

module.exports = app;
