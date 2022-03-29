const subStringMath = {
  "add": function(x,y){ return x + y },
  "subtract": function(x,y){ return x - y },
  "multiply": function(x,y){ return x * y},
  "divide": function(x,y){ return x / y}
};

function arithmetic(a, b, operator){
  return subStringMath[operator.toLowerCase()](Number(a), Number(b));
}


// add other solutions

function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}

const arithmetic = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);

function arithmetic(a, b, operator){
  optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
  return eval(a + optable[operator] + b); 
}
