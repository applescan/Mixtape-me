/**
 * Controller for static pages
 */

const path = require('path');

/**
 * Renders the home page
 */
exports.homePage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../src/views/index.html'));
};

/**
 * Renders the about page
 */
exports.aboutPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../src/views/about.html'));
};

/**
 * Renders the privacy policy page
 */
exports.privacyPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../src/views/privacy.html'));
};

/**
 * Renders the contact page
 */
exports.contactPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../src/views/contact.html'));
};