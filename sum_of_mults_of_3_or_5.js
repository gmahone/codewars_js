function findSum(n) {
  arr = [];
  for(i = 1; i <= n; i++){
    arr.push(i);
  }
  return arr
    .filter( a => ( a % 5 === 0 || a % 3 === 0 ) )
    .reduce( (acc,c) => acc + c, 0 );
}

// other solutions

function findSum(n) {
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 ===0 || i % 5 === 0) result += i
  }
  return result
}

const sumMultiples = (m, n) => { 
  let x = n / m | 0; 
  return m * x * (x + 1) / 2; 
};

const findSum = n => 
  sumMultiples(3, n) + sumMultiples(5, n) - sumMultiples(15, n);

function findSum(n) {
  return Array.from({length: n}, (a, b) => b+1)
    .reduce(function(curSum, val) {
      return !(val % 5 && val % 3) ? curSum + val : curSum;
    }, 0)
}

function findSum(n) {
 if (n < 3) return 0
 return (n % 3 === 0 || n % 5 === 0) ? n + findSum(n-1) : findSum(n-1)
}

const f = (k, n) => k * ~~(n/k) * ~~(n/k + 1) / 2;
const findSum = n => f(3, n) + f(5, n) - f(15, n);

