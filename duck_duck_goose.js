function duckDuckGoose(players, goose) {
  let chosen = (goose % players.length) - 1;
  if(goose % players.length === 0){
    chosen = players.length - 1
  }
  console.log(players.length, goose, chosen)
  return players[chosen].name;
}


// much less complex function
function duckDuckGoose(players, goose) {
  return players[(goose-1)%players.length].name
}


// arrow function version
const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;
