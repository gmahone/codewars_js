function digPow(n, p){
  let result = -1;
  let powSum = n.toString().split("").map((a,b) => Number(a)**(p+b)).reduce((acc,c) => acc + c);
  if( powSum % n === 0){
    result = powSum / n;
  }
  return result;
}

// other solutions

function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}

function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}
