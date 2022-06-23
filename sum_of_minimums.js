function sumOfMinimums(arr) {
  let result = arr.map(a => Math.min(...a)).reduce((acc,c) => acc + c);
  return result;
}
