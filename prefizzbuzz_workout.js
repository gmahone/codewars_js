function preFizz(n) {
  let result = [];
  for(i = 1; i <= n; i++){
    result.push(i);
  }
  return result;
}


// using array from
function preFizz(n) {
  let result = Array.from({length: n}. (_, i) => i + 1);
  return result;
}


// using array from in arrow function

const preFizz = n => Array.from({length: n}, (_, i) => i + 1);
