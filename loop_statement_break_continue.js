function grabDoll(dolls){
  var bag=[];
  for(let doll of dolls){
    if(doll == "Hello Kitty" || doll == "Barbie doll"){
      bag.push(doll);
      if(bag.length > 2){
        break
      }
    } else {
      continue
    }
  } 
  return bag;
}


// alternative solution
function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
    bag.push(dolls[i]);
    if (bag.length === 3) break;
  }
  return bag;
}
