function nameShuffler(str){
  let res = str.split(" ").reverse().join(" ");
  return res;
}

// arrow function version
const nameShuffler = str => str.split(" ").reverse().join(" ");
