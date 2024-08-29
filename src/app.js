const express = require('express');
const app = express();
const discordRoutes = require('./routes/discordRoutes');

app.use('/api', discordRoutes);

module.exports = app;
