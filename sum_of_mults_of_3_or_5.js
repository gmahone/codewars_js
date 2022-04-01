function findSum(n) {
  arr = [];
  for(i = 1; i <= n; i++){
    arr.push(i);
  }
  return arr
    .filter( a => ( a % 5 === 0 || a % 3 === 0 ) )
    .reduce( (acc,c) => acc + c, 0 );
}
