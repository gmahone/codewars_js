function uefaEuro2016(teams, scores){
  let result = `At match ${teams[0]} - ${teams[1]}, `
  if(scores[0] > scores[1]){
    result += `${teams[0]} won!`;
  } else if(scores[0] < scores[1]){
    result += `${teams[1]} won!`;
  } else {
    result += "teams played draw."
  }
  return result;
}


// define winner first
function uefaEuro2016(teams, scores) {
    const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2

    return score1 === score2
        ? `At match ${team1} - ${team2}, teams played draw.`
        : `At match ${team1} - ${team2}, ${winner} won!`
}
