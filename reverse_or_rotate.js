function revrot(str, sz) {
    let resultArray = []
    if(sz > str.length){
        return "";
    }
    let loopLength = str.length % sz;
    let tempStr;
    for(let i = 0; i < loopLength; i++){
        console.log(str);
        tempStr = str.substring(0, sz).split("");
        str = str.substring(sz);
        if(Number(tempStr.reduce((acc,c) => acc + (+c)**3)) % 2 === 0){
            resultArray.push(tempStr.reverse().join(""));
        } else {
            tempStr.push(tempStr.shift());
            resultArray.push(tempStr.join(""));
        }
    }
    console.log(resultArray)
    return resultArray.join("");
}
