var number=function(array){
  return array.map( (a,b) => `${b+1}: ${a}`);
}


// other solutions

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

const number = array => array.map((n, i) => `${i + 1}: ${n}`);

function number(arr) {
  return arr.map((e, i) => `${++i}: ${e}`);
}
