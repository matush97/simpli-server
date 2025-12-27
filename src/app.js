const express = require('express');

const announcementRoutes = require('./routes/announcement-routes');

const app = express();

app.use(express.json());

app.use('/api/announcement', announcementRoutes);

module.exports = app;
