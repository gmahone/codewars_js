function getMiddle(s) {
  let result = "";
  if(s.len & 1){
    result += s[ Math.floor( s.len / 2 )];
  } else {
    result += s[ s.len / 2 - 1 ] + s[ s.len / 2 ];
  }
  return result;
}
