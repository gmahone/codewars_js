function flattenAndSort(array){
    //let flat_array = array.flat();
    let flat_array = array.reduce((acc, val) => acc.concat(val), []);
    let out_array = flat_array.sort( (a,b) => a - b );
    return out_array;
  }

  // const flattenAndSort = a => a.flat().sort( (a,b) => a - b );
