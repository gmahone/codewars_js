// test case
// arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b){
  for(let i = 0; i < b.length; i++){
    a = a.filter(val => val !== b[i]);
  }
  return(a);
}
