const gimme = triplet => triplet.indexOf([...triplet].sort( (a,b) => a - b )[1])


// other solutions

function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
};

var gimme=arr =>arr.map((x,i) => [x,i]).sort(([a],[b])=>b-a)[1][1];
