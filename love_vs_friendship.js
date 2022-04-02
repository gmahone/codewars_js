function charConverter(letter, num){
    if(letter === String.fromCharCode(97 + num)){
        return num+1;
    } else {
        return charConverter(letter, num+1);
    }
}

function wordsToMarks(string){
    return string.split("").map( a => charConverter(a, 0)).reduce( (acc, c) => acc + c, 0);
}

