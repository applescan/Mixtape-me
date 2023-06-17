function spotifyLogout() {
  const spotifyLogoutWindow = window.open('https://accounts.spotify.com/en/logout',
    'Spotify Logout', 'width=700,height=500,top=40,left=40');
  setTimeout(function () { spotifyLogoutWindow.close() }, 2000);
}


// Added event listener to "downloadButton"
document.getElementById('screenshotButton').addEventListener('click', () => {
  domtoimage.toPng(document.getElementById('capture'))
    .then(function (dataUrl) {
      let link = document.createElement('a');
      link.download = 'Mixtape-me.png';
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
});
