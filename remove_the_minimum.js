function removeSmallest(numbers) {
  numbers.splice(numbers.indexOf(Math.min(...numbers)),1);
  return(numbers);
}
