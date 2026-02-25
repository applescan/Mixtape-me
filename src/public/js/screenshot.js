/**
 * Screenshot functionality for saving mixtape images
 */

// Function to initialize download functionality
function initializeScreenshot() {
  // Add event listener to screenshot button
  document.getElementById('screenshotButton').addEventListener('click', function() {
    const capture = document.getElementById('capture');
    capture.classList.add('capture-saving');
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
        capture.classList.remove('capture-saving');
      });
  });
}

// Initialize screenshot functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeScreenshot);
