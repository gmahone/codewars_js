function findOdd(A) {
  let out = [];
  for(i = 0; i < A.length; i++){
    if(out.includes(A[i])){
      out = out.filter( (a) => a !== A[i]);
    } else {
      out.push(A[i]);
    }
  }
  return Number(out);
}

/* other solutions */

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
