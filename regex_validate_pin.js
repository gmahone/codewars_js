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



// loop solution
function validatePIN (pin) {
  const splitPin = pin.split("")
  let result = true;
  for(let i = 0; i < splitPin.length; i++){
    console.log(Number(splitPin[i])+1);
    if(!(Number(splitPin[i])+1)){
      result = false;
    }
  }
  if(splitPin.length != 4 && splitPin.length != 6){
    result = false;
  }
  if(pin.length != pin.trim().length){
    result = false;
  }
  return result;
}

// other solutions
// incredibly easy regex solution !
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

// more involved regex solution
function validatePIN (pin) {
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  return false;
}

// arrow function regex
const validatePIN = pin => /^(\d{4}$|\d{6}$)/.test(pin);
