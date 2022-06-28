function positiveSum(arr) {
  return arr.filter(e => e > 0).reduce((acc,c) => acc + c, 0);
}

// arrow function version
const positiveSum = arr => arr.filter(e => e > 0).reduce((acc,c) => acc + c, 0);
