function calc(x){
  let charCodeArray = String(x).split("")
    .map(e => String(e.charCodeAt()))
    .join("")
    .split("");
  console.log(charCodeArray)
  
  let charCodeSwapArray = charCodeArray.join("")
    .replaceAll(/7/ig, "1")
    .split("")
  console.log(charCodeSwapArray)
    
  let charCodeSum = charCodeArray.reduce((acc,c) => acc + +c, 0);
  console.log(charCodeSum)
  
  let charCodeSwapSum = charCodeSwapArray.reduce((acc,c) => acc + +c, 0);
  console.log(charCodeSwapSum);
  
  return(charCodeSum - charCodeSwapSum);
}
