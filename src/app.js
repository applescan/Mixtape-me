/**
 * Mixtape-me - A Spotify mixtape creator
 * 
 * This application integrates with Spotify to display a user's top tracks
 * in a retro mixtape format
 */

// Import dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

// Import configuration
const config = require('./config/config');

// Import routes
const routes = require('./routes');
const contentRoutes = require('./routes/content');

// Create Express app
const app = express();

// Configure view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/templates'));

// Configure middleware
app
  .use(express.static(path.join(__dirname, 'public')))
  .use(cors())
  .use(cookieParser());

// Configure routes
app.use('/', routes);
app.use('/', contentRoutes);

module.exports = app;