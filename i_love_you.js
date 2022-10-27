let responseList = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"];
function howMuchILoveYou(nbPetals) {
    let response = responseList[nbPetals % responseList.length];
    return(response);
}
