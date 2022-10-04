function giveMeFive(obj){
  let result = [];
  for(let key in obj){
    if(obj[key].length > 4){
      result.push(obj[key]);
    }
  }
}
