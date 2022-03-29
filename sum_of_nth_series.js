function SeriesSum(n){
  return n === 0 ? "0.00": Array(n)
      .fill()
      .map( (element, index) => 1/(3*index+1) )
      .reduce( (acc, c) => acc + c)
      .toFixed(2)
      .toString()
}


// other solutions

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}

function SeriesSum(n)
{
  for(a=0,i=1;i<=n*3;i+=3) a+=1/i;
  return a.toFixed(2);
}

function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}

function SeriesSum(n) {
  return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
}

SeriesSum = n => Array.from(Array(n), (e, i) => 1 / (i * 3 + 1)).reduce((s, e) => s + e, 0).toFixed(2);
