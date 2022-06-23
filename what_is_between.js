function between(a, b) {
  let result = [];
  for(let i = a; i <= b; i++){
    result.push(i);
  }
  return result;
}


// arrow function using Array.from
const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);
