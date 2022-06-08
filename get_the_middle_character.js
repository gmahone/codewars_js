function getMiddle(s) {
  let result = "";
  if(s.length & 1){
    result += s[ Math.floor( s.length / 2 )];
  } else {
    result += s[ s.length / 2 - 1 ] + s[ s.length / 2 ];
  }
  return result;
}
