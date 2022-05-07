function sumMix(x){
  return(x.reduce((acc,c) => acc + +c, 0));
}


// arrow function version
const sumMix = x => x.reduce((acc, c) => acc + +c, 0);
