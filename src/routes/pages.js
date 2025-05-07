/**
 * Static page routes for the application
 */

const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Home page route
router.get('/', pageController.homePage);

// About page route
router.get('/about', pageController.aboutPage);

// Privacy policy page route
router.get('/privacy', pageController.privacyPage);

// Contact page route
router.get('/contact', pageController.contactPage);

module.exports = router;