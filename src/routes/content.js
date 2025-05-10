/**
 * Routes for content API
 */
const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Get all content
router.get('/api/content', contentController.getAllContent);

// Get section content
router.get('/api/content/:section', contentController.getSectionContent);

module.exports = router;