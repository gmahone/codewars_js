function remainder(n, m){
  let sortedArray = [n,m].sort((a,b) => a - b);
  if(sortedArray[0] === 0){
    return NaN;
  }
  return sortedArray[1] % sortedArray[0];
}
