var playlist = {
  Slowdive: "Differences",
  My Bloody Valentine: "Sometimes",
  Phil Ochs: "Drowning"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "songTitle"
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Ginuwine
  return playlist
}