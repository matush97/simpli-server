const express = require('express');
const cors = require('cors');

const announcementRoutes = require('./routes/announcement-routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/announcement', announcementRoutes);

module.exports = app;
