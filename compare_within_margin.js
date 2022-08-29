function closeCompare(a, b, margin = 0){
  let result = 0;
  let remainder = Math.abs(a - b);
  console.log(a,b,margin);
  if(remainder > margin){
    
    if(a > b){
      result = 1;
    }
    else {
      result = -1;
    }
  }
  return result;
}

