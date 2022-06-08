function getMiddle(s) {
  let result = "";
  if(s.length & 1){
    result += s[ Math.floor( s.length / 2 )];
  } else {
    result += s[ s.length / 2 - 1 ] + s[ s.length / 2 ];
  }
  return result;
}


// other solutions

// substring ternary solution
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// using only slice
function getMiddle(s) {
  return s.slice((s.length-1)/2, s.length/2+1);
}
