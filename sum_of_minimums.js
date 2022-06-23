function sumOfMinimums(arr) {
  let result = arr.map(a => Math.min(...a)).reduce((acc,c) => acc + c);
  return result;
}

// using reduce first on array of arrays
function sumOfMinimums(arr) {
  let result = arr.reduce((acc, c) => acc + Math.min(...c), 0);
  return result;
}
