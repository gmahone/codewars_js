function remainder(n, m){
  let sortedArray = [n,m].sort();
  return sortedArray[1] % sortedArray[0];
}
