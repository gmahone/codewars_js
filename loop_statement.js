function giveMeFive(obj){
  let result = [];
  for(let key in obj){
    if(obj[key].length == 5){
      result.push(obj[key]);
    }
    if(key.length == 5){
      result.push(key);
    }
  }
  return(result);
}
