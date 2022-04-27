function nbYear(p0, percent, aug, p) {
  let i = 0;
  while(p0 < p){
    p0 += Math.floor(p0 * percent/100) + aug;
    i += 1;
  }
  return i;
}


// for loop version
function nbYear(p0, percent, aug, p) {
    
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}
