function addBinary(a,b) {
  const c = a + b
  return (c >>> 0).toString(2);
}
