function duckDuckGoose(players, goose) {
  let chosen = players.length % goose;
  console.log(chosen)
  return players[chosen].name;
}
