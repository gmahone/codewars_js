function countPositivesSumNegatives(input) {
  const positiveCount = input.filter(a => a > 0).length;
  const negativeSum = input.filter(a => a < 0).reduce((acc,c) => acc + c);
  return([positiveCount, negativeSum]);
}
