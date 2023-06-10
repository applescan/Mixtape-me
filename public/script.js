function spotifyLogout() {
  const spotifyLogoutWindow = window.open('https://accounts.spotify.com/en/logout',
    'Spotify Logout', 'width=700,height=500,top=40,left=40');
  setTimeout(function () { spotifyLogoutWindow.close() }, 2000);
}

document.getElementById('screenshotButton').addEventListener('click', () => {
  const captureElement = document.getElementById('capture');
  
  html2canvas(captureElement).then(canvas => {
      let link = document.createElement('a');
      link.download = 'mixtape.png';
      link.href = canvas.toDataURL();
      link.click();
  });
});

