function filter_list(l) {
  return(l.filter(a => Number.isInteger(a)));
}


// other solutions

// solution using typeof number
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

