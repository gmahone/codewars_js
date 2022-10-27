let responseList = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
function howMuchILoveYou(nbPetals) {
    let response = responseList[(nbPetals % responseList.length) - 1];
    return(response);
}
