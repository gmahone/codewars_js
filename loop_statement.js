function giveMeFive(obj){
  for(let key in obj){
    if(obj[key].length > 4){
      console.log(obj[key]);
    }
  }
}
