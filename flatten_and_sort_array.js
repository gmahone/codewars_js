function flattenAndSort(array){
    //let flat_array = array.flat();
    let flat_array = array.reduce((acc, val) => acc.concat(val), []);
    let out_array = flat_array.sort( (a,b) => a - b );
    return out_array;
  }

  // const flattenAndSort = a => a.flat().sort( (a,b) => a - b );


// other solutions

"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}


function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current],[])
    .sort((a, b) => a - b)
    ;
}

const flattenAndSort = array => [].concat(...array).sort((a,b)=>a-b)
