function encrypt(text, n) {
  if(n < 1 || text == null){
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
  if(n < 1 || encryptedText == null){
    return(encryptedText);
  }
  let text = encryptedText.split("");
  for(let i = 0; i < n; i++){
    let oddText = text.filter((e,i) => i < Math.floor(text.length/2));
    let evenText = text.filter((e,i) => i >= Math.floor(text.length/2));
    let newText = [];
    for(let j = 0; j < text.length; j++){
      if(j & 1){
        let addOne = oddText.shift();
        newText.push(addOne);
      } else {
        let addOne = evenText.shift();
        newText.push(addOne);
      }
    }
    text = newText;
  }
  return(text.join(""));
}
