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
