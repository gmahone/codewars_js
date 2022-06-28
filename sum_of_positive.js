function positiveSum(arr) {
  return arr.reduce((acc,c) => acc + Math.abs(c));
}
