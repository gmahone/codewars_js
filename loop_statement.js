function giveMeFive(obj){
  let result = [];
  for(let key in obj){
    if(key.length == 5){
      result.push(key);
    }
    if(obj[key].length == 5){
      result.push(obj[key]);
    }
  }
  return(result);
}


// object conversion in arrow function
const giveMeFive = obj => [].concat(...Object.entries(obj)).filter(element => element.length == 5);
