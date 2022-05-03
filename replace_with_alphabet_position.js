function alphabetPosition(text) {
  let currLetter, result = [];
  for(let i = 0; i < text.length; i++){
    currLetter = text[i].toUpperCase().charCodeAt()
    if(currLetter > 64 && currLetter < 91){
      result.push(currLetter - 64);
    }
  }
  return(result.join(" "));
}

