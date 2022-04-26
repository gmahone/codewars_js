function removeSmallest(numbers) {
  numbers.splice(numbers.indexOf(Math.min(...numbers)),1);
  return(numbers);
}
// this version mutates the original array and therefore fails some testing
