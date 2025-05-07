/**
 * Configuration settings for the Mixtape-me application
 */

module.exports = {
  // Spotify API credentials
  spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID || "1ad80b0afbc2487182f47218b6cb8b90",
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "84c94f932ab84a839ace2439f81c38f7",
    redirectUri: process.env.SPOTIFY_REDIRECT_URI || "https://mixtape-me.herokuapp.com/callback"
  },
  
  // Server configuration
  server: {
    port: process.env.PORT || 3003
  },
  
  // Keys and secrets
  auth: {
    stateKey: "spotify_auth_state"
  }
};
