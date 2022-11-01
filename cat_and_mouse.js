function catMouse(x){
  let result = "Caught!";
  if(x.length > 5){
    result = "Escaped!";
  }
  return(result);
}
