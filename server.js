/**
 * Entry point for the Mixtape-me application
 */

// Import the application
const app = require('./src/app');
const config = require('./src/config/config');

// Start the server
const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`Mixtape-me server is running on port ${PORT}`);
});
