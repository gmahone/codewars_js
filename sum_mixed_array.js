function sumMix(x){
  return(x.reduce((acc,c) => acc + +c, 0));
}


// arrow function version
const sumMix = x => x.reduce((acc, c) => acc + +c, 0);


// other solutions
// first conversion via map, then reduce
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}


// loop based solution
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}
