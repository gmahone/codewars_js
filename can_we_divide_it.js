function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}

// arrow function version
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;


// add solution using .every
function isDivideBy(number, a, b) {
  return [a, b].every(i => number % i === 0)
}
