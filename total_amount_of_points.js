function points(games) {
  let result = 0, game;
  for(let i = 0; i < games.length; i++){
    game = games[i].split(":").map(a => Number(a));
    if(game[0] > game[1]){
      result += 3;
    } else if(game[0] === game[1]){
      result += 1;
    } else {
      continue;
    }
  }
  return(result);
}
