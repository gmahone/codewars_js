function sumMul(n,m){
  let multVal = n / (m-1) >> 0;
  result = new Array(multVal).fill(n).map((e,i) => e * (i+1));
}
