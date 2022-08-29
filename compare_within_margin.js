function closeCompare(a, b, margin = 0){
  let result = 0;
  if(a > b + margin){
    result = 1;
  }
  if(a < b + margin){
    result = -1;
  }
  return result;
}

