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
