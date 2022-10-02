function encrypt(text, n) {
  if(n < 1){
    return(text);
  }
  let oddArray = [];
  let evenArray = [];
  for(let i = 0; i < n; i++){
    for(let j = 0; j < text.length; j++){
      if(j & 1){
        oddArray.push(text[j]);
      } else {
        evenArray.push(text[j]);
      }
    }
    text = oddArray.push(evenArray);
    console.log(text)
  }
  return "";
}

function decrypt(encryptedText, n) {
  return "";
}
