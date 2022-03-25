function factorial(n){
    let out;
    if(n < 0 || n > 12){
      throw new RangeError("The argument must be between 0 and 12");
    } else if(n === 0 || n === 1){
      out = 1;
    } else {
      out = n;
      while(n > 1){
        out *= (n-1);
        n -= 1;
      }
    }
    return out;
  }

// other solutions

function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function factorial(n){

 if (n < 0 || n > 12) {
    throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
  }
return n<2 ? 1 : n*factorial(n-1);
}

function factorial(n) {
  if (n < 0 || n > 12)
    throw RangeError();
  var f = 1;
  while (n > 1)
    f *= n--;
  return f;
}
