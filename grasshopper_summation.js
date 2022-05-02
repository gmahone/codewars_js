var summation = function (num) {
  return new Array(num).fill(0).map((v, i) => i + 1).reduce((acc,c) => acc + c);
}

// add other solutions

// loop solution
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}


// math solution
const summation = n => n * (n + 1) / 2;
