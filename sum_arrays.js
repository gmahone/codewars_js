// arrow function version
const sum = numbers => numbers.reduce((acc,c) => acc + c, 0);


// standard function version
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
