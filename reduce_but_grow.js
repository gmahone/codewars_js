function grow(x){
  return(x.reduce((acc,c) => acc * c, 1));
}

// arrow function version

const grow = x => x.reduce((acc,c) => acc * c, 1);
