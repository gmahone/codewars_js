function grabDoll(dolls){
  var bag=[];
  
  for(let doll of dolls){
    console.log(doll, bag);
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
