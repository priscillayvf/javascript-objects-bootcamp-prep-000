var playlist = {
  Ginuwine: "Differences",
  Drake: "Passionfruit",
  Avicii: "Drowning"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "songTitle"
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Ginuwine
}