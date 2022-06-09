function countBy(x, n) {
  let z = [];
  let jump = x;
  for(let i = 0; i < n; i++){
    z.push(x);
    x += jump;
  }
  return z;
}


// add other solutions

// solution with index multiplication
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}


// solution with loop index skips
function countBy(x, n) {
  var z = [];
  for (var i=x; i <= (x*n); i += x){
    z.push(i);
  }
  return z
}

// arrow function with Array
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
