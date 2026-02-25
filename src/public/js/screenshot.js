/**
 * Screenshot functionality for saving mixtape images
 */

// Function to initialize download functionality
function initializeScreenshot() {
  // Add event listener to screenshot button
  document.getElementById('screenshotButton').addEventListener('click', function() {
    const capture = document.getElementById('capture');
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
    // Convert the specified DOM node to a PNG image
    domtoimage.toPng(capture)
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
        capture.classList.remove('capture-saving');
      });
  });
}

// Initialize screenshot functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeScreenshot);
