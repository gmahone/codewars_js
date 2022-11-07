function cubeOdd(arr) {
  if(arr.length !== arr.filter(e => Number.isInteger(e)).length){
    return(undefined);
  };
  let result = arr.map(e => e**3)
    .filter(e => e & 1)
  result = result.reduce((acc,e) => acc + e, 0);
  return result;
}


// clean solution
function cubeOdd(arr) {
  arr = arr.filter((num) => {return num % 2 != 0});
  arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
  return isNaN(arr) ? undefined : arr;
}
