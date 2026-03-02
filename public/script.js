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

    if (spotifyLogoutWindow) {
      setTimeout(() => spotifyLogoutWindow.close(), 2000);
    }

    sessionStorage.removeItem('songsShortTerm');
    sessionStorage.removeItem('songsMediumTerm');
    sessionStorage.removeItem('songsLongTerm');

    setTimeout(() => {
      window.location.href = '/';
    }, 2100);
  });
});


// Added event listener to "downloadButton"
document.getElementById('screenshotButton').addEventListener('click', () => {
  const capture = document.getElementById('capture');
  const restoreMobileSizing = applyMobileCaptureSizing(capture);
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
      if (restoreMobileSizing) {
        restoreMobileSizing();
      }
      capture.classList.remove('capture-saving');
    });
});

function applyMobileCaptureSizing(capture) {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (!isMobile) {
    return null;
  }
  const original = {
    width: capture.style.width,
    height: capture.style.height,
    minHeight: capture.style.minHeight,
    maxWidth: capture.style.maxWidth,
    marginLeft: capture.style.marginLeft,
    marginRight: capture.style.marginRight,
  };
  capture.style.width = `${window.innerWidth}px`;
  capture.style.height = `${window.innerHeight}px`;
  capture.style.minHeight = `${window.innerHeight}px`;
  capture.style.maxWidth = `${window.innerWidth}px`;
  capture.style.marginLeft = '0';
  capture.style.marginRight = '0';
  return function restore() {
    capture.style.width = original.width;
    capture.style.height = original.height;
    capture.style.minHeight = original.minHeight;
    capture.style.maxWidth = original.maxWidth;
    capture.style.marginLeft = original.marginLeft;
    capture.style.marginRight = original.marginRight;
  };
}
