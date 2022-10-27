let responseList = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"];
function howMuchILoveYou(nbPetals) {
    let response = responseList[nbPetals % responseList.length];
    return(response);
}


// using different indexing
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]
function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}
