/**
 * Controller for managing content and text
 */
const path = require('path');
const fs = require('fs');

// Load content from JSON file
const contentFilePath = path.join(__dirname, '../data/content.json');
const content = JSON.parse(fs.readFileSync(contentFilePath, 'utf8'));

/**
 * Get all content
 */
exports.getAllContent = (req, res) => {
  res.json(content);
};

/**
 * Get content for a specific section
 */
exports.getSectionContent = (req, res) => {
  const section = req.params.section;
  
  if (content[section]) {
    return res.json(content[section]);
  }
  
  return res.status(404).json({ error: 'Section not found' });
};

/**
 * Renders the home page with content
 */
exports.renderHomePage = (req, res) => {
  res.render('index', { 
    content: content,
    meta: content.meta,
    home: content.home,
    footer: content.footer,
    nav: content.nav
  });
};

/**
 * Renders the about page with content
 */
exports.renderAboutPage = (req, res) => {
  res.render('about', { 
    content: content,
    meta: content.meta,
    about: content.about,
    footer: content.footer,
    nav: content.nav
  });
};

/**
 * Renders the privacy page with content
 */
exports.renderPrivacyPage = (req, res) => {
  res.render('privacy', { 
    content: content,
    meta: content.meta,
    privacy: content.privacy,
    footer: content.footer,
    nav: content.nav
  });
};

/**
 * Renders the contact page with content
 */
exports.renderContactPage = (req, res) => {
  res.render('contact', { 
    content: content,
    meta: content.meta,
    contact: content.contact,
    footer: content.footer,
    nav: content.nav
  });
};