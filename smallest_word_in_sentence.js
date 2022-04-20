function findShort(s){
  return s.split(" ").map( a => a.length ).sort( (a,b) => a - b)[0];
}

// would be nice to find a way to do the above without the 0 indexing


// other solutions

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}
