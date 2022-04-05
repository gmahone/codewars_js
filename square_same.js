function comp(a, b){
  if(a === null || b === null){
    return false;
  }
    let a2 = a.sort( (a,b) => a - b).map( a => a**2);
    b.sort( (a,b) => a - b);
    
    for(i = 0; i < a2.length; i++){
        if(a2[i] != b[i]){
            return false;
        }
    }
    return true;
}

// other solutions
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

const comp = (array1, array2) => 
  Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.every(item => {
    const index = array2.indexOf(Math.pow(item, 2))
    return index > -1 ? array2.splice(index, 1) : false
  })

function comp(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    return a.map(x => x * x).sort().toString() === b.sort().toString();
}
