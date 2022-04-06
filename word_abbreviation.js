// my very ugly solution!
function abbreviate(sentence){
    let i = 0;
    let firstChar = 0;
    let lastChar = 0;
    let out = [];
    let currWord = [];
    let wordLength;
    while(i < sentence.length){
        if(sentence[i].match(/^[0-9a-zA-Z]+$/)){
            lastChar = i
            currWord.push(sentence[i])
        } else {
            wordLength = lastChar - firstChar
            if(wordLength >= 3){
                out.push(sentence[firstChar] + String(wordLength - 1) + sentence[lastChar] + sentence[i]);
                currWord = [];
            } else {
                currWord.push(sentence[i]);
                out.push(currWord.join(""));
                currWord = [];
            }
            firstChar = i+1;
           
        }            
        i++;
    }
    if(currWord !== []){
        wordLength = lastChar - firstChar;
        if(wordLength >= 3){
            out.push(sentence[firstChar] + String(wordLength - 1) + sentence[lastChar]);
            currWord = [];
        } else {
            currWord.push(sentence[i]);
            out.push(currWord.join(""));
            currWord = [];
        }
    }
    return out.join("");
}
