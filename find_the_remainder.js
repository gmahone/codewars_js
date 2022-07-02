function remainder(n, m){
  if([n,m].includes(0)){
    return NaN;
  }
  let sortedArray = [n,m].sort();
  return sortedArray[0] % sortedArray[1];
}
