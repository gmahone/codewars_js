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


// other solutions

// ternary arrow function
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)
