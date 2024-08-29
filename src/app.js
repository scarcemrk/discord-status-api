const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const discordRoutes = require('./routes/discordRoutes');

// Enable CORS for all origins
app.use(cors());

// Define your routes
app.use('/api', discordRoutes);

module.exports = app;

