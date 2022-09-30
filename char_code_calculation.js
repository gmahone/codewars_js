function calc(x){
  let charCodeArray = String(x).split("")
    .map(e => String(e.charCodeAt()))
    .join("")
    .split("");
  
  let charCodeSwapArray = charCodeArray.map(a => a == "7" ? "1" : a);
    
  let charCodeSum = charCodeArray.reduce((acc,c) => acc + +c, 0);
  
  let charCodeSwapSum = charCodeSwapArray.reduce((acc,c) => acc + +c, 0);

  return(charCodeSum - charCodeSwapSum);
}
