function grabDoll(dolls){
  var bag=[];
  
  for(doll in dolls){
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
