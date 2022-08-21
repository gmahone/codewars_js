function duckDuckGoose(players, goose) {
  let chosen = players.length % goose;
  return players[chosen].name;
}
