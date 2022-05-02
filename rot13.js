test1 = "abc def ghi jkl mnop qrs tuv wxyz";
let currCharCode, newCharCode;
let result = ""

for(let i = 0; i < test1.length; i++){
  currCharCode = test1[i].charCodeAt();
  if(currCharCode >= 97 && currCharCode <= 122){
    newCharCode = currCharCode + 13;
    if(newCharCode > 122){
      newCharCode = newCharCode - 122 + 96;
    }
  } else if(currCharCode >= 65 && currCharCode <= 90){
    newCharCode = currCharCode + 13;
    if(newCharCode > 90){
      newCharCode = newCharCode - 90 + 64;
    }
  } else {
    newCharCode = currCharCode;
  }
  result += String.fromCharCode(newCharCode);
  console.log(currCharCode);
  console.log(newCharCode);
  console.log(String.fromCharCode(newCharCode));
}
//console.log(result);
// initial solution above

// given solution that passed the initial tests
function rot13(message){
  let currCharCode, newCharCode;
  let result = "";

  for(let i = 0; i < message.length; i++){
    currCharCode = message[i].charCodeAt();
    if(currCharCode >= 97 && currCharCode <= 122){
      newCharCode = currCharCode + 13;
      if(newCharCode > 122){
        newCharCode = newCharCode - 122 + 96;
      }
    } else if(currCharCode >= 65 && currCharCode <= 90){
      newCharCode = currCharCode + 13;
      if(newCharCode > 90){
        newCharCode = newCharCode - 90 + 64;
      }
    } else {
      newCharCode = currCharCode;
    }
    result += String.fromCharCode(newCharCode);
  }
  return(result);
}



// other solutions
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));


var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){
  return message.split('').map(function(char) { 
    var code = char.charCodeAt(0);
    if(codeA <= code && code <= codeZ){
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if(codea <= code && code <= codez){
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}


function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}



var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";

function rot13(message){
  return message.split('').map(function(c) {
    var i = alphabet.indexOf(c);
    if (i < 0) {
      // not in alphabet, return char
      return c;
    }
    
    return cipher[i];
  }).join('');
}



function rot13(message){
  //your code here
  return (message + '')
    .replace(/[a-z]/gi, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
    });

}
