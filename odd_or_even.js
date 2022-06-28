function oddOrEven(array) {
   let result = array.reduce((acc,c) => acc + c, 0);
   return result % 2 == 0 ? "even" : "odd";
}

// with one line
function oddOrEven(arr) {
  return arr.reduce((acc,c) => acc+c, 0) % 2 ? "odd" : "even";
}

// arrow function version
const oddOrEven = arr => arr.reduce((acc,c) => acc+c, 0) % 2 ? "odd" : "even";
