function sumMul(n,m){
  if(m < 1){
    return "INVALID";
  }
  let multVal = (m-1) / n >> 0;
  result = new Array(multVal)
    .fill(n)
    .map((e,i) => e * (i+1))
    .reduce((acc,c) => acc + c,0);
  return result;
}


// solution via for loop
function sumMul(n,m){
  if(m < 1){
    return "INVALID";
  }
  var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}
