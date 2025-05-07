/**
 * Authentication routes for Spotify OAuth
 */

const express = require('express');
const router = express.Router();
const spotifyController = require('../controllers/spotifyController');

// Login route to authenticate with Spotify
router.get('/login', spotifyController.login);

// Callback route after Spotify authentication
router.get('/callback', spotifyController.callback);

// Refresh token route to get a new access token
router.get('/refresh_token', spotifyController.refreshToken);

module.exports = router;