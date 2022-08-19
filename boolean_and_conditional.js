function trueOrFalse(val){
  if (val)    return "true";             
  else     return "false";
}


// different version
function trueOrFalse(val){
  return Boolean(val).toString();
}


// ternary solution
function trueOrFalse(val){
  return val ? true : false;             
}
