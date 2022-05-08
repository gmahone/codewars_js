const reverseSeq = n => {
  return(Array(n).fill(1).map((a,i) => a + i).reverse());
};


// normal function version
function reverseSeq(n){
  let result = Array(n).fill(1).map((a,i) => a + i).reverse();
  return(result);
};
