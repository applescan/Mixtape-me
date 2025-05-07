/**
 * Authentication handling for Spotify OAuth
 */

// Get hash parameters from URL
function getHashParams() {
  const hashParams = {};
  let e;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  
  return hashParams;
}

// Handle authentication and page display
function handleAuth() {
  // Compile Handlebars templates
  const userProfileSource = document.getElementById('user-profile-template').innerHTML;
  const userProfileTemplate = Handlebars.compile(userProfileSource);
  const userProfilePlaceholder = document.getElementById('user-profile');

  const oauthSource = document.getElementById('oauth-template').innerHTML;
  const oauthTemplate = Handlebars.compile(oauthSource);
  const oauthPlaceholder = document.getElementById('oauth');

  // Get authentication params from URL
  const params = getHashParams();
  const accessToken = params.access_token;
  const refreshToken = params.refresh_token;
  const error = params.error;

  if (error) {
    alert('There was an error during the authentication');
  } else {
    if (accessToken) {
      // Fetch user profile if we have an access token
      $.ajax({
        url: 'https://api.spotify.com/v1/me',
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
        success: function(response) {
          userProfilePlaceholder.innerHTML = userProfileTemplate(response);

          $('#login').hide();
          $('#loggedin').show();
          
          // Fetch top tracks from Spotify API
          getTopTracksShortTerm(accessToken);
          getTopTracksMediumTerm(accessToken);
          getTopTracksLongTerm(accessToken);
        }
      });
    } else {
      // Show login screen if no access token
      $('#login').show();
      $('#loggedin').hide();
    }

    // Retrieve any cached songs from sessionStorage
    retrieveCachedSongs();
  }
}

// Retrieve cached songs from sessionStorage
function retrieveCachedSongs() {
  if (sessionStorage.getItem('songsShortTerm') !== null) {
    const songsShortTerm = JSON.parse(sessionStorage.getItem('songsShortTerm'));
    console.log(songsShortTerm);
  }

  if (sessionStorage.getItem('songsMediumTerm') !== null) {
    const songsMediumTerm = JSON.parse(sessionStorage.getItem('songsMediumTerm'));
    console.log(songsMediumTerm);
  }

  if (sessionStorage.getItem('songsLongTerm') !== null) {
    const songsLongTerm = JSON.parse(sessionStorage.getItem('songsLongTerm'));
    console.log(songsLongTerm);
  }
}

// Logout from Spotify
function spotifyLogout() {
  const spotifyLogoutWindow = window.open(
    'https://accounts.spotify.com/en/logout',
    'Spotify Logout', 
    'width=700,height=500,top=40,left=40'
  );
  setTimeout(() => spotifyLogoutWindow.close(), 2000);
}

// Initialize authentication on page load
document.addEventListener('DOMContentLoaded', handleAuth);