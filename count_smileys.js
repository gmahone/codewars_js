function countSmileys(arr) {
  console.log(arr);
  if(arr.length === 0){
    return 0;
  } else {
    return arr.map( a => a.match(/^[;:]/) && a.match(/[)D]+$/) && !(a.match(/[o_]/)) && a.length<4 ? 1 : 0).reduce((acc,c) => acc + c)
  }
}
// my solution basically trial and error until I could pass all test :/


// other solutions

// great solution for understanding character search in JS
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

// also now with reduce
const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);

// separation of search set
const SMILING = /[:;]{1}[-~]?[)D]{1}/;
const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;

// ? means matches 0 or 1 times
