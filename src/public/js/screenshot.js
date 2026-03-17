/**
 * Screenshot functionality for saving mixtape images
 */

// Function to initialize download functionality
function initializeScreenshot() {
  // Add event listener to screenshot button
  document.getElementById('screenshotButton').addEventListener('click', function() {
    const capture = document.getElementById('capture');
    const restoreMobileSizing = applyMobileCaptureSizing(capture);
    capture.classList.add('capture-saving');
    const albumLinks = capture.querySelectorAll('.album-link');
    albumLinks.forEach(function(albumLink) {
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
    waitForCaptureLayout()
      .then(function() {
        const captureWidth = Math.ceil(Math.max(capture.scrollWidth, capture.offsetWidth));
        const captureHeight = Math.ceil(Math.max(capture.scrollHeight, capture.offsetHeight));

        // Convert the specified DOM node to a PNG image using the full rendered size.
        return domtoimage.toPng(capture, {
          width: captureWidth,
          height: captureHeight,
          style: {
            width: `${captureWidth}px`,
            height: `${captureHeight}px`,
          },
        });
      })
      .then(function(dataUrl) {
        // Create a download link and trigger the download
        let link = document.createElement('a');
        link.download = 'Mixtape-me.png';
        link.href = dataUrl;
        link.click();
      })
      .catch(function(error) {
        console.error('Screenshot error:', error);
      })
      .finally(function() {
        albumLinks.forEach(function(albumLink) {
          albumLink.querySelectorAll('.case-base, .case-overlay').forEach(function(node) {
            node.remove();
          });
        });
        if (restoreMobileSizing) {
          restoreMobileSizing();
        }
        capture.classList.remove('capture-saving');
      });
  });
}

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
  capture.style.height = 'auto';
  capture.style.minHeight = '0';
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

function waitForCaptureLayout() {
  return new Promise(function(resolve) {
    requestAnimationFrame(function() {
      requestAnimationFrame(resolve);
    });
  });
}

// Initialize screenshot functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeScreenshot);
