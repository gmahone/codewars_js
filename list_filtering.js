function filter_list(l) {
  return(l.filter(a => Number.isInteger(a)));
}

// arrow function version
const filter_list = l => l.filter(a => Number.isInteger(a));

// other solutions

// solution using typeof number
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

const filter_list = l => l.filter(a => typeof a == "number")

