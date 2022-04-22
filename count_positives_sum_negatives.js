function countPositivesSumNegatives(input) {
  if(input.length === 0 || input === null){
    return([]);
  }
  const positiveCount = input.filter(a => a > 0).length;
  const negativeSum = input.filter(a => a < 0).reduce((acc,c) => acc + c);
  return([positiveCount, negativeSum]);
}
