/**
 * Functions for displaying track data in the UI
 */

/**
 * Map and display short term top tracks
 * @param {Array} songsShortTerm - Array of track objects
 */
function mapOverSongsShortTerm(songsShortTerm) {
  songsShortTerm.map(function(songShortTerm) {
    const albumUrl = songShortTerm.album.images[1].url;
    const list = `
      <div class="cd">
        <a class="album-link" style="--album-image: url('${albumUrl}');" target="_blank" href="${songShortTerm.external_urls.spotify}"> 
          <img class="img2" src="${albumUrl}">
        </a>

        <br>

        <div>
          <b>${songShortTerm.name}</b> by
          <b>${songShortTerm.artists[0].name}</b>
          from the album 
          <b>${songShortTerm.album.name}</b>
          <br>
          <br> 
          <br>
        </div>
      </div>
    `;

    document.getElementById('top-tracks-ShortTerm').innerHTML += list;
  });
}

/**
 * Map and display medium term top tracks
 * @param {Array} songsMediumTerm - Array of track objects
 */
function mapOverSongsMediumTerm(songsMediumTerm) {
  songsMediumTerm.map(function(songMediumTerm) {
    const albumUrl = songMediumTerm.album.images[1].url;
    const list = `
      <div class="cd">
        <a class="album-link" style="--album-image: url('${albumUrl}');" target="_blank" href="${songMediumTerm.external_urls.spotify}"> 
          <img class="img2" src="${albumUrl}">
        </a>

        <br>

        <div>
          <b>${songMediumTerm.name}</b> by
          <b>${songMediumTerm.artists[0].name}</b>
          from the album 
          <b>${songMediumTerm.album.name}</b>
          <br>
          <br> 
          <br>
        </div>
      </div>
    `;

    document.getElementById('top-tracks-MediumTerm').innerHTML += list;
  });
}

/**
 * Map and display long term top tracks
 * @param {Array} songsLongTerm - Array of track objects
 */
function mapOverSongsLongTerm(songsLongTerm) {
  songsLongTerm.map(function(songLongTerm) {
    const albumUrl = songLongTerm.album.images[1].url;
    const list = `
      <div class="cd">
        <a class="album-link" style="--album-image: url('${albumUrl}');" target="_blank" href="${songLongTerm.external_urls.spotify}"> 
          <img class="img2" src="${albumUrl}">
        </a>

        <br>

        <div>
          <b>${songLongTerm.name}</b> by
          <b>${songLongTerm.artists[0].name}</b>
          from the album 
          <b>${songLongTerm.album.name}</b>
          <br>
          <br> 
          <br>
        </div>
      </div>
    `;

    document.getElementById('top-tracks-LongTerm').innerHTML += list;
  });
}
