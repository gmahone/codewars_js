function getSum( a,b ){
  if(a === b){
    return a;
  }
  arr = [a,b];
  arr.sort((a,b) => a - b);
  out = arr[0];
  for(i = 1; i <= (arr[1] - arr[0]); i++){
    out += (arr[0] + i);
  }
  return out
}

