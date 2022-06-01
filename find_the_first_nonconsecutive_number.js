function firstNonConsecutive (arr) {
  result = null;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] - arr[i-1] > 1){
      return(arr[i]);
    }
  }
  return result;
}

// add other solutions

// solution using find
function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}
