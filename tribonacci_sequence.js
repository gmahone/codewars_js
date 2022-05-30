function tribonacci(signature,n){
  let triSum;
  for(i = 0; i < (n-3); i++){
    triSum = signature.filter((a,ind) => ind > i).reduce((acc,c) => acc + c);
    signature.push(triSum);
  }
  return signature;
}
