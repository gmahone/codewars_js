function encrypt(text, n) {
  if(n < 1){
    return(text);
  }
  for(let i = 0; i < n; i++){
    let oddArray = [];
    let evenArray = [];
    for(let j = 0; j < text.length; j++){
      console.log(text[j])
      if(j & 1){
        oddArray.push(text[j]);
      } else {
        evenArray.push(text[j]);
      }
    }
    console.log(oddArray.join(""))
    console.log(evenArray.join(""))
    text = oddArray.join("") + evenArray.join("")
    console.log(text)
  }
  console.log("\n\n")
  return(text);
}

function decrypt(encryptedText, n) {
  return "";
}
