function squareSum(numbers){
  return(numbers.reduce((acc, c) => acc + c**2, 0))
}
