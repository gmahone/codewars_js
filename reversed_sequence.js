const reverseSeq = n => {
  return(Array(n).fill(1).map((a,i) => a + i).reverse());
};
