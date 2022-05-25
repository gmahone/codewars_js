// add function to determine 
function pyramidSize(n) {
  if(n > 1){
    return n + factorial(n-1)
  } else {
    return n
  }
}
