function findOdd(A) {
  let out = [];
  for(i = 0; i < A.length; i++){
    if(out.includes(A[i])){
      out = out.filter( (a) => a !== A[i]);
    } else {
      out.push(A[i]);
    }
  }
  return Number(out);
}

