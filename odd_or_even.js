function oddOrEven(array) {
   let result = array.reduce((acc,c) => acc + c);
   return result % 0 ? "even" : "odd";
}
