function digPow(n, p){
  let result = -1;
  let powSum = n.toString().split("").map((a,b) => Number(a)**(p+b)).reduce((acc,c) => acc + c);
  if( powSum % n === 0){
    result = powSum / n;
  }
  return result;
}
