function numberToPower(number, power){
  return new Array(power).fill(number).reduce((acc,c) => acc * c, 1);
}


// using for loop
function numberToPower(number, power){
  var total = 1;
  for (var i = 1; i <= power; i++) { 
    total = total * number;
  }
  return total;
}


// recursive solution
function numberToPower(number, power){
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1)
}


// recursive arrow function
const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;
