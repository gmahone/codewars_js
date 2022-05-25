// input should be an integer that indicates the max width of the diamond
// return is the diamond itself
// example:
// 5 ->
//   *
//  ***
// *****
//  ***
//   *
// pseudocode
//  input integer (n) indicates also the number of lines
//  loop i from 1...n
//   determine space padding with max(i, (n-1)/i) - min(i, (n-1)/i)
//   determine the number of asterisks with ((n-1)/2) - n % i)
//   draw the current line

function drawDiamond(n){
  let spacePadding;
  let asteriskNumber;
  let resultDiamond = "";
  for(let i = 1; i < (n+1); i++){
    spacePadding = Math.max(i-1, (n-1)/2) - Math.min(i-1, (n-1)/2);
    //spacePadding = (((n-1)/2) - n % i);
    asteriskNumber = n - spacePadding*2;
    //asteriskNumber = (n % i);
    console.log(spacePadding, asteriskNumber);
    resultDiamond += " ".repeat(spacePadding) + "*".repeat(asteriskNumber) + "\n";
  }
  return(resultDiamond);
}

// submitted solution
function diamond(n){
  if(!(n & 0x1) || n <= 0){
    return null
  }
  let spacePadding;
  let asteriskNumber;
  let diam = "";
  for(let i = 1; i < (n+1); i++){
    spacePadding = Math.max(i-1, (n-1)/2) - Math.min(i-1, (n-1)/2);
    asteriskNumber = n - spacePadding*2;
    diam += " ".repeat(spacePadding) + "*".repeat(asteriskNumber) + "\n";
  }
  return diam;
}
