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
  let resultDiamond;
  for(let i = 0; i < (n+1); i++){
    spacePadding = Math.max(i, (n-1)/i) - Math.min(i, (n-1)/i);
    asteriskNumber = (((n-1)/2) - n % i);
    resultDiamond += " ".repeat(spacePadding) + "*".repeat(asteriskNumber) + "\n"
  }
  return(resultDiamond);
}
