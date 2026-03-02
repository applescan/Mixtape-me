/**
 * Main entry point for the Mixtape-me application
 * Aggregates all the individual JavaScript modules
 */

// Initialize event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Mixtape-me application initialized');

  const logoutLinks = document.querySelectorAll('[data-spotify-logout]');
  if (!logoutLinks.length) {
    return;
  }

  logoutLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const spotifyLogoutWindow = window.open(
        'https://accounts.spotify.com/en/logout',
        'Spotify Logout',
        'width=700,height=500,top=40,left=40'
      );

      if (!spotifyLogoutWindow) {
        window.location.href = 'https://accounts.spotify.com/en/logout';
        return;
      }

      setTimeout(() => spotifyLogoutWindow.close(), 2000);
      sessionStorage.removeItem('songsShortTerm');
      sessionStorage.removeItem('songsMediumTerm');
      sessionStorage.removeItem('songsLongTerm');
    });
  });
});
