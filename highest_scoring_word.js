function high(x){
  let words = x.split(" ");
  let currentMax = 0;
  let result;
  for(let i = 0; i < words.length; i++){
    let wordScore = words[i].split("").map(a => a.charCodeAt() - 96);
    if(wordScore > currentMax){
      result = words[i];
    }
  }
  return(result);
}
