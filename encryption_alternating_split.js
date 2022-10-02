function encrypt(text, n) {
  let oddArray;
  let evenArray;
  for(let i = 0; i < n; i++){
    if(i & 1){
      oddArray.push(text[i]);
    } else {
      evenArray.push(text[i]);
    }
    console.log(oddArray,evenArray);
  }
  result "";
}

function decrypt(encryptedText, n) {

}
