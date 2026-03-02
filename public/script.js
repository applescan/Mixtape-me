function spotifyLogout() {
  const spotifyLogoutWindow = window.open('https://accounts.spotify.com/en/logout',
    'Spotify Logout', 'width=700,height=500,top=40,left=40');
  setTimeout(function () { spotifyLogoutWindow.close() }, 2000);
}

document.querySelectorAll('[data-spotify-logout]').forEach((link) => {
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


// Added event listener to "downloadButton"
document.getElementById('screenshotButton').addEventListener('click', () => {
  const capture = document.getElementById('capture');
  capture.classList.add('capture-saving');
  const albumLinks = capture.querySelectorAll('.album-link');
  albumLinks.forEach((albumLink) => {
    if (!albumLink.querySelector('.case-base')) {
      const caseBase = document.createElement('span');
      caseBase.className = 'case-base';
      albumLink.appendChild(caseBase);
    }
    if (!albumLink.querySelector('.case-overlay')) {
      const caseOverlay = document.createElement('span');
      caseOverlay.className = 'case-overlay';
      albumLink.appendChild(caseOverlay);
    }
  });
  domtoimage.toPng(capture)
    .then(function (dataUrl) {
      let link = document.createElement('a');
      link.download = 'Mixtape-me.png';
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    })
    .finally(function() {
      albumLinks.forEach((albumLink) => {
        albumLink.querySelectorAll('.case-base, .case-overlay').forEach((node) => {
          node.remove();
        });
      });
      capture.classList.remove('capture-saving');
    });
});
