// add function to determine 
function pyramidSize(n) {
  if(n > 1){
    return n + pyramidSize(n-1)
  } else {
    return n
  }
}

/*
function pyramidSum(n){
  let rowValue = pyramidSize(n) * 2 - 1;
  let result = 0;
  for(let i = 0; i < n; i++){
    result += rowValue;
    rowValue -= 2;
  }
  return result;
}
*/

function rowSumOddNumbers(n) {
	let rowValue = pyramidSize(n) * 2 - 1;
  let result = 0;
  for(let i = 0; i < n; i++){
    result += rowValue;
    rowValue -= 2;
  }
  return result;
}

// add solution

// simple solution
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
