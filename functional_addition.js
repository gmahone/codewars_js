function add(n) {
  return function(x){return x + n};
}


// arrow function version
const add = n => x => x + n;
