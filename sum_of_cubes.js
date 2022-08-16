function sumCubes(n){
  return Array(n).fill(1).map((e,i) => e + i).reduce((acc,c) => acc + c**3, 0);
}
