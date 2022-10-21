function min(arr, toReturn) {
  minValue = Math.min(...arr);
  if(toReturn === "value"){
    return(minValue);
  } else if(toReturn === "index"){
    return(arr.indexOf(minValue));
  } else {
    return(undefined);
  }
}

// using ternary
function min(arr, toReturn) {
  var val = Math.min.apply(null, arr)
  return toReturn == 'value' ? val : arr.indexOf(val)
}


// add arrow function ternary
const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
