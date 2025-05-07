/**
 * Main routes index file
 * Centralizes all routes for the application
 */

const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth');
const pageRoutes = require('./pages');

// Register all routes
router.use('/', authRoutes);
router.use('/', pageRoutes);

module.exports = router;