function addBinary(a,b) {
  const c = a + b
  //return (c >>> 0).toString(2);
  return c.toString(2);
}
// above solution doesn't work for all random test cases
// presumably very large numbers


// now fixed, didn't need the bitwise comparison


// arrow function version
const addBinary = (a, b) => (a + b).toString(2);
