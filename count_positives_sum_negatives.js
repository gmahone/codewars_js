function countPositivesSumNegatives(input) {
  if(input === null || input.length === 0){
    return([]);
  }
  const positiveCount = input.filter(a => a > 0).length;
  const negativeSum = input.filter(a => a < 0).reduce((acc,c) => acc + c);
  return([positiveCount, negativeSum]);
}

// other solutions


// loop example
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    let positive = 0;
    let negative = 0;
    
    for (let i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}


// single line conditional
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}


function countPositivesSumNegatives(input) {
    return (input && input.length) ? [
      input.filter(x => x > 0).length,
      input.reduce((t, c) => c < 0 ? t + c : t, 0)
    ] : [];
}


function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce((arr, n) => {
    if (n > 0) arr[0]++;
    if (n < 0) arr[1] += n;
    return arr;
  }, [0, 0]);
}
