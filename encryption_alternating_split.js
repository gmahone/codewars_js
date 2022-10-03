function encrypt(text, n) {
  if(n < 1){
    return(text);
  }
  for(let i = 0; i < n; i++){
    let oddArray = [];
    let evenArray = [];
    for(let j = 0; j < text.length; j++){
      if(j & 1){
        oddArray.push(text[j]);
      } else {
        evenArray.push(text[j]);
      }
    }
    text = oddArray.join("") + evenArray.join("")
  }
  return(text);
}

function decrypt(encryptedText, n) {
  let text = encryptedText;
  let oddText = text.filter((e,i) => i < Math.ceil(n/2));
  console.log(oddText);
  let evenText = text.filter((e,i) => i >= Math.ceil(n/2));
  console.log(evenText);
  return "";
}
