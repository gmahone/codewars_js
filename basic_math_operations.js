function basicOp(operation, value1, value2)
  switch(operation){
    case "+":
      return(value1+value2);
    case "-":
      return(value1-value2);
    case "*":
      return(value1*value2);
    case "/":
      return(value1/value2);
  }
}


// object solution
function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}
