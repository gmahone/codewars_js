function tribonacci(signature,n){
  let triSum;
  for(i = 0; i < (n-3); i++){
    triSum = signature.filter((a,ind) => ind > i).reduce((acc,c) => acc + c);
    signature.push(triSum);
  }
  return signature.slice(0,n);
}

// other solutions

// simple looping with fixed indices
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
