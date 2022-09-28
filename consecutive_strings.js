function longestConsec(strarr, k) {
    let longestWord = "";
    if(k < 1){
        return(longestWord);
    }    
    for(let i = 0; i < (strarr.length - k + 1); i++){
        let tempWord = strarr.slice(i, i+k).join("");
        if(tempWord.length > longestWord.length){
            longestWord = tempWord;
        }
    }
    return(longestWord);
}


// cleaner solution
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}
