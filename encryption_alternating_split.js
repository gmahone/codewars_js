function encrypt(text, n) {
  if(n < 1){
    return(text);
  }
  let oddArray = [];
  let evenArray = [];
  for(let i = 0; i < n; i++){
    for(let j = 0; j < test.length; j++){
      if(i & 1){
        oddArray.push(text[i]);
      } else {
        evenArray.push(text[i]);
      }
      test = oddArray.push(evenArray);
      console.log(test)
    }
  }
  return "";
}

function decrypt(encryptedText, n) {
  return "";
}
