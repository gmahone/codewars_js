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
// doesn't work for all edgecases

// regex example
function validatePIN (pin) {
  let validPinLength = pin
    .split("")
    .map(a => a.match(/([0-9])/ig))
    .filter(a => Array.isArray(a))
    .length;
  return validPinLength == 4 || validPinLength == 6 ? true : false;
}
// doesn't work because of negatives etc.


// stepwise case solution
function validatePIN (pin) {
  const lengthTest = pin.length == 4 || pin.length == 6;
  const numberTest = Number(pin)+1;
  const floatTest = pin.includes(".");
  const negativeTest = pin.includes("-");
  const trimTest = pin.trim().length == pin.length;
  return lengthTest && numberTest && !floatTest && !negativeTest && trimTest ? true : false;
}


