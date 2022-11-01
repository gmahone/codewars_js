function catMouse(x){
  let result = "Caught!";
  if(x.length > 5){
    result = "Escaped!";
  }
  return(result);
}

// solution with ternary
function catMouse(x) {
  return x.length <= 5 ? 'Caught!' : 'Escaped!';
}
