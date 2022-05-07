function grow(x){
  return(x.reduce((acc,c) => acc * c, 1));
}

// arrow function version

const grow = x => x.reduce((acc,c) => acc * c, 1);


// other solutions

// loop version
const grow = x => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};
