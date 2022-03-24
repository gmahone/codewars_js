function openOrSenior(data){
  let out = [];
  for(i = 0; i < data.length; i++){
    if(data[i][0] >= 55 & data[i][1] > 7){
      out.push("Senior");
    } else {
      out.push("Open");
    }
  }
  return out;
}


/* other solutions */
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}
