function squareArea(A){
  let radius = (4*A)/(2*Math.PI);
  let volume = radius ** 2;
  let roundedVolume = Math.round(volume*100)/100;
  return(roundedVolume);
}
