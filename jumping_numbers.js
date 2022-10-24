function jumpingNumber(n){
  let inputString = String(n).split("");
  let result = "Jumping!!"
  if(inputString.length == 1){
    return(result);
  }
  for(let i = 0; i < (inputString.length-1); i++){
    let absDiff = Math.abs(Number(inputString[i]) - Number(inputString[i+1]));
    if(absDiff !== 1){
      return("Not!!");
    }
  }
  return(result);
}
