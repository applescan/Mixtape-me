/**
 * Controller for static pages
 */

const path = require('path');
const fs = require('fs');

// Load content from JSON file
const contentFilePath = path.join(__dirname, '../data/content.json');
const content = JSON.parse(fs.readFileSync(contentFilePath, 'utf8'));

/**
 * Renders the home page
 */
exports.homePage = (req, res) => {
  // For backward compatibility, fall back to static HTML if EJS templates aren't ready
  try {
    res.render('index', { 
      content: content,
      meta: content.meta,
      home: content.home,
      footer: content.footer,
      nav: content.nav
    });
  } catch (error) {
    res.sendFile(path.join(__dirname, '../../src/views/index.html'));
  }
};

/**
 * Renders the about page
 */
exports.aboutPage = (req, res) => {
  try {
    res.render('about', { 
      content: content,
      meta: content.meta,
      about: content.about,
      footer: content.footer,
      nav: content.nav
    });
  } catch (error) {
    res.sendFile(path.join(__dirname, '../../src/views/about.html'));
  }
};

/**
 * Renders the privacy policy page
 */
exports.privacyPage = (req, res) => {
  try {
    res.render('privacy', { 
      content: content,
      meta: content.meta,
      privacy: content.privacy,
      footer: content.footer,
      nav: content.nav
    });
  } catch (error) {
    res.sendFile(path.join(__dirname, '../../src/views/privacy.html'));
  }
};

/**
 * Renders the contact page
 */
exports.contactPage = (req, res) => {
  try {
    res.render('contact', { 
      content: content,
      meta: content.meta,
      contact: content.contact,
      footer: content.footer,
      nav: content.nav
    });
  } catch (error) {
    res.sendFile(path.join(__dirname, '../../src/views/contact.html'));
  }
};