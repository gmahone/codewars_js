function repeatStr (n, s) {
  let i = 1, result = s;
  while(i < n){
    result += s;
    i += 1;
  }
  return result;
}


// add other solutions

function repeatStr (n, s) {
  return s.repeat(n);
}
