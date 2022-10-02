function encrypt(text, n) {
  if(n < 1){
    return(text);
  }
  let oddArray = [];
  let evenArray = [];
  for(let i = 0; i < n; i++){
    for(let j = 0; j < text.length; j++){
      console.log(text[j])
      if(j & 1){
        oddArray.push(text[j]);
      } else {
        evenArray.push(text[j]);
      }
    }
    console.log(oddArray, evenArray)
    text = oddArray.push(evenArray);
  }
  return "";
}

function decrypt(encryptedText, n) {
  return "";
}
