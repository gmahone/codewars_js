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

// other solutions

// regex solution
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}
