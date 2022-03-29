const subStringMath = {
  "add": function(x,y){ return x + y },
  "subtract": function(x,y){ return x - y },
  "multiply": function(x,y){ return x * y},
  "divide": function(x,y){ return x / y}
};

function arithmetic(a, b, operator){
  return subStringMath[operator.toLowerCase()](Number(a), Number(b));
}
