function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function drawSongs(songList) {
    var template = ``
    var songResults = document.getElementById('searchResults')
    for (var i = 0; i < 50; i++) {
      var song = songList[i];
      template += `
        <div class="col-md-4 col-sm-6 col-xs-12 d-flex align-items-stretch pt-3">
          <div class="song-card">
            <div class="album-cover">
              <img src="${song.albumArt}">
            </div>
            <div class="song-info">
              <h2>${song.title}</h2>
              <h3>${song.artist}</h3>
              <h3>${song.collection}</h3>
              <h3>$${song.price}</h3>
              <h3><audio controls id="${song.trackId}"><source src="${song.preview}" type="audio/ogg"><source src="${song.preview}" type="audio/mpeg">Your browser does not support the audio tag.</audio></h3>
            </div>
          </div>
        </div>
      `
      songResults.innerHTML = template
    }
  }
}
