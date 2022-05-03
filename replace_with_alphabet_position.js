function alphabetPosition(str){
  let currLetter, result = [];
  for(let i = 0; i < str.length; i++){
    currLetter = str[i].toUpperCase().charCodeAt()
    if(currLetter > 64 && currLetter < 91){
      result.push(currLetter - 64);
    }
  }
  return(result.join(" "));
}

