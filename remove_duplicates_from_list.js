// using Set
function distinct(a) {
  return [...new Set(a)];
}

// or using Array.from rather than spread
function distinct(a) {
  return Array.from(new Set(a));
}

// using filter
function distinct(a) {
  return a.filter((e, i, arr) => arr.indexOf(e) === i);
}

// arrow function version
const distinct = a => a.filter((e, i, arr) => arr.indexOf(e) === i);
