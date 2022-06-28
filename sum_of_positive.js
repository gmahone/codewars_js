function positiveSum(arr) {
  return arr.filter(e => e > 0).reduce((acc,c) => acc + c, 0);
}
