function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b);
  return(numbers[0] + numbers[1])
}

// other solutions

function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}
