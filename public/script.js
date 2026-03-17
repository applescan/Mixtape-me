const MOBILE_EXPORT_WIDTH = 1920;
const MOBILE_EXPORT_HEIGHT = 1080;

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
  let exportTarget = null;
  waitForCaptureLayout()
    .then(() => {
      exportTarget = createExportTarget(capture);
      return waitForCaptureLayout();
    })
    .then(() => {
      return window.htmlToImage.toPng(exportTarget.node, {
        cacheBust: true,
        pixelRatio: 1,
        width: exportTarget.width,
        height: exportTarget.height,
        canvasWidth: exportTarget.width,
        canvasHeight: exportTarget.height,
        style: {
          width: `${exportTarget.width}px`,
          height: `${exportTarget.height}px`,
        },
      });
    })
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
      if (exportTarget) {
        exportTarget.cleanup();
      }
      capture.classList.remove('capture-saving');
    });
});

function createExportTarget(capture) {
  const captureWidth = Math.ceil(Math.max(capture.scrollWidth, capture.offsetWidth));
  const captureHeight = Math.ceil(Math.max(capture.scrollHeight, capture.offsetHeight));

  if (!window.matchMedia('(max-width: 768px)').matches) {
    return {
      node: capture,
      width: captureWidth,
      height: captureHeight,
      cleanup: function () {},
    };
  }

  const frame = document.createElement('div');
  const stage = document.createElement('div');
  const clone = capture.cloneNode(true);
  const scale = Math.min(MOBILE_EXPORT_WIDTH / captureWidth, MOBILE_EXPORT_HEIGHT / captureHeight);
  const scaledWidth = Math.max(1, Math.round(captureWidth * scale));
  const scaledHeight = Math.max(1, Math.round(captureHeight * scale));
  const bodyStyles = window.getComputedStyle(document.body);

  frame.style.position = 'fixed';
  frame.style.left = '-99999px';
  frame.style.top = '0';
  frame.style.width = `${MOBILE_EXPORT_WIDTH}px`;
  frame.style.height = `${MOBILE_EXPORT_HEIGHT}px`;
  frame.style.display = 'flex';
  frame.style.alignItems = 'center';
  frame.style.justifyContent = 'center';
  frame.style.overflow = 'hidden';
  frame.style.pointerEvents = 'none';
  frame.style.zIndex = '-1';
  frame.style.backgroundColor = bodyStyles.backgroundColor;
  frame.style.backgroundImage = bodyStyles.backgroundImage;
  frame.style.backgroundPosition = bodyStyles.backgroundPosition;
  frame.style.backgroundRepeat = bodyStyles.backgroundRepeat;
  frame.style.backgroundSize = bodyStyles.backgroundSize;

  stage.style.width = `${scaledWidth}px`;
  stage.style.height = `${scaledHeight}px`;
  stage.style.overflow = 'hidden';
  stage.style.flex = '0 0 auto';

  clone.style.width = `${captureWidth}px`;
  clone.style.height = `${captureHeight}px`;
  clone.style.margin = '0';
  clone.style.transform = `scale(${scale})`;
  clone.style.transformOrigin = 'top left';

  stage.appendChild(clone);
  frame.appendChild(stage);
  document.body.appendChild(frame);

  return {
    node: frame,
    width: MOBILE_EXPORT_WIDTH,
    height: MOBILE_EXPORT_HEIGHT,
    cleanup: function () {
      frame.remove();
    },
  };
}

function waitForCaptureLayout() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}
