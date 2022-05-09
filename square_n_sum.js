function squareSum(numbers){
  return(numbers.reduce((acc, c) => acc + c**2, 0));
}


const squareSum = numbers => numbers.reduce((acc, c) => acc + c**2, 0);


// other solutions
// forEach solution
function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}
