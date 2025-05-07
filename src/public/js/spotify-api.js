/**
 * Functions for fetching data from Spotify API
 */

// Global variables to store track data
let topTracksShortTerm;
let topTracksMediumTerm;
let topTracksLongTerm;

/**
 * Get user's top tracks for short term (approximately last 4 weeks)
 * @param {string} accessToken - Spotify access token
 */
function getTopTracksShortTerm(accessToken) {
  $.ajax({
    url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    success: function(response) {
      topTracksShortTerm = response;
      const songsShortTerm = topTracksShortTerm.items;
      
      console.log(songsShortTerm);
      sessionStorage.setItem('songsShortTerm', JSON.stringify(songsShortTerm));
      mapOverSongsShortTerm(songsShortTerm);
    }
  });
}

/**
 * Get user's top tracks for medium term (approximately last 6 months)
 * @param {string} accessToken - Spotify access token
 */
function getTopTracksMediumTerm(accessToken) {
  $.ajax({
    url: 'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=5',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    success: function(response) {
      topTracksMediumTerm = response;
      const songsMediumTerm = topTracksMediumTerm.items;
      
      console.log(songsMediumTerm);
      sessionStorage.setItem('songsMediumTerm', JSON.stringify(songsMediumTerm));
      mapOverSongsMediumTerm(songsMediumTerm);
    }
  });
}

/**
 * Get user's top tracks for long term (calculated from several years of data)
 * @param {string} accessToken - Spotify access token
 */
function getTopTracksLongTerm(accessToken) {
  $.ajax({
    url: 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    success: function(response) {
      topTracksLongTerm = response;
      const songsLongTerm = topTracksLongTerm.items;
      
      console.log(songsLongTerm);
      sessionStorage.setItem('songsLongTerm', JSON.stringify(songsLongTerm));
      mapOverSongsLongTerm(songsLongTerm);
    }
  });
}