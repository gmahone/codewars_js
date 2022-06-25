function revrot(str, sz) {
    let resultArray = []
    if(sz === 0 || sz > str.length){
        return "";
    }
    let loopLength = Math.floor(str.length / sz);
    console.log(str.length, sz, loopLength)
    let tempStr;
    for(let i = 0; i < loopLength; i++){
        tempStr = str.substring(0, sz).split("").map(a => Number(a));
        str = str.substring(sz);
        if(Number(tempStr.reduce((acc,c) => acc + c**3)) % 2 === 0){
            resultArray.push(tempStr.reverse().join(""));
        } else {
            tempStr.push(tempStr.shift());
            resultArray.push(tempStr.join(""));
        }
    }
    return resultArray.join("");
}
