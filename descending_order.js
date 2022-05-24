function descendingOrder(n){
  return Number(String(n).split("").sort((a,b) => b - a).join(""));
}


// using parseInt instead of Number
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
