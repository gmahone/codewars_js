function addBinary(a,b) {
  const c = a + b
  return (c >>> 0).toString(2);
}
// above solution doesn't work for all random test cases
// presumably very large numbers
