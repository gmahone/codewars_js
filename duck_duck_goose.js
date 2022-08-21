function duckDuckGoose(players, goose) {
  let chosen = (goose % players.length) - 1;
  if(goose % players.length === 0){
    chosen = players.length - 1
  }
  console.log(players.length, goose, chosen)
  return players[chosen].name;
}
