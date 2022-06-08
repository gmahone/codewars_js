function getMiddle(s) {
  let result;
  if(s.len & 1){
    result = s[ Math.floor( s.len / 2 ) + 1 ];
  } else {
    result = s[ s.len / 2 ] + s[ s.len / 2 + 1 ];
  }
  return result;
}
