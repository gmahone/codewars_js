function squareSum(numbers){
  return(numbers.reduce((acc, c) => acc + c**2, 0));
}


const squareSum = numbers => numbers.reduce((acc, c) => acc + c**2, 0);
