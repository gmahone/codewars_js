function aliasGen(first, last){
    firstLetter = first.substring(0,1);
    secondLetter = last.substring(0,1);
    let result = "Your name must start with a letter from A - Z.";
    if(firstName.hasOwnProperty(firstLetter) && 
       surname.hasOwnProperty(secondLetter)){
        result = `${firstName[firstLetter]} ${surname[secondLetter]}`;
    }
    console.log(result);
    return "";
}
