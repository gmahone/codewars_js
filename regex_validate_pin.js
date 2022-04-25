// non regex solution
// not very great
function validatePIN (pin) {
  let result = true;
  if(pin.length != 4 && pin.length != 6){
    result = false;
  }
  pin.split("").map(a => Number(a)+1 ? a : result = false);
  return result;
}



