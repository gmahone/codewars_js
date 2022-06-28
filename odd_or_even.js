function oddOrEven(array) {
   let result = array.reduce((acc,c) => acc + c, 0);
   return result % 2 == 0 ? "even" : "odd";
}
