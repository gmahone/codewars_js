// test case
// arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b){
  for(let i = 0; i < b.length; i++){
    a = a.filter(val => val !== b[i]);
  }
  return(a);
}


// other solutions

// inverse filtering
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
