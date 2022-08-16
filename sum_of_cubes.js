function sumCubes(n){
  return Array(n).fill(1).map((e,i) => e + i).reduce((acc,c) => acc + c**3, 0);
}


// recursive function
function sumCubes(n){
  if (n == 1) {
    return n**3;
  } else {
    return n**3 + sumCubes(n - 1);
  }
}
