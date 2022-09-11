function digits(n) {
  return n.toString().split("").length
}


// drop split since length is also char length
function digits(n) {
  return n.toString().length;
}

// arrow function version
const digits = n => n.toString().length;


// using String()
function digits(n) {
  return String(n).length
}


// using template literal
function digits(n) {
  return `${n}`.length;
}
