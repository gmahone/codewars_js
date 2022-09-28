function longestConsec(strarr, k) {
    let longestWord = "";
    if(k < 1){
        return(longestWord);
    }    
    for(let i = 0; i < (strarr.length - k + 1); i++){
        let tempWord = strarr.slice(i, i+k).join("");
        console.log(tempWord);
        if(tempWord.length > longestWord.length){
            longestWord = tempWord;
        }
    }
    return(longestWord);
}
