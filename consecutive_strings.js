function longestConsec(strarr, k) {
    let longestWord = "";
    
    for(let i = 0; i < (strarr.length - k); i++){
        let tempWord = strarr.slice(i, i+k).join("");
        console.log(tempWord);
        if(tempWord.length > longestWord.length){
            longestWord = tempWord;
        }
        
    }
    return(longestWord);
}
