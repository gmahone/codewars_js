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
