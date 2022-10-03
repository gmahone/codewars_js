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


// cleaner solution
function encrypt(text, n) {
  if (!text || n <= 0) return text; 
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}


// regex solution
function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}
