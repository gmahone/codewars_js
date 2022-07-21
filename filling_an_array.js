const arr = N => N ? Array(N).fill(0).map((e,i) => e + i) : [];


// non arrow function via looping
function arr(n){
  var newArr = [];
  for(var i = 0; i < n; i++){
    newArr.push(i);
  }
  return newArr;
}


// arrow function with Array.from
const arr = n => Array.from({length: n}, (_, i) => i);

// arrow function using Array .keys
const arr = n => n ? [...Array(n).keys()] : [];
