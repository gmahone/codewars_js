function closeCompare(a, b, margin = 0){
  let result = 0;
  let remainder = Math.abs(a - b);
  if(remainder > margin){
    if(a > b){
      result = 1;
    }
    if(a < b){
      result = -1;
    }
  }
  return result;
}

// using a ternary and Math.sign
function closeCompare(a, b, m = 0){
  return Math.abs(a - b) <= m? 0: Math.sign(a - b);
}
