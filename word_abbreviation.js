// my very ugly solution!
function abbreviate(sentence){
    let i = 0;
    let firstChar = 0;
    let lastChar = 0;
    let out = [];
    let currWord = [];
    let wordLength;
    while(i < sentence.length){
        if(sentence[i].match(/^[0-9a-zA-Z]+$/)){
            lastChar = i
            currWord.push(sentence[i])
        } else {
            wordLength = lastChar - firstChar
            if(wordLength >= 3){
                out.push(sentence[firstChar] + String(wordLength - 1) + sentence[lastChar] + sentence[i]);
                currWord = [];
            } else {
                currWord.push(sentence[i]);
                out.push(currWord.join(""));
                currWord = [];
            }
            firstChar = i+1;
           
        }            
        i++;
    }
    if(currWord !== []){
        wordLength = lastChar - firstChar;
        if(wordLength >= 3){
            out.push(sentence[firstChar] + String(wordLength - 1) + sentence[lastChar]);
            currWord = [];
        } else {
            currWord.push(sentence[i]);
            out.push(currWord.join(""));
            currWord = [];
        }
    }
    return out.join("");
}


// other solutions

var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
  return string.replace(find, replace);
}


function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}


function abbreviate(string) {
  var na = /([^a-z])/i;                                                                      // 1 
  var ss = string.split(na);                                                                 // 2
  return ss
    .map(function(element) {                                                                 // 3
      if (element.length >= 4) {                                                             // 4
         return element = "" + element[0] + (element.length-2) + element[element.length-1];
      }                                                                                      // 5
      else return element                                                                    // 6
    })
    .join(separator = "")                                                                    // 7
}



function abbreviate(string) {
  return string.replace(/\B\w{2,}\B/g, match=> match.length);
}


function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(w) { return w[0] + (w.length - 2) + w[w.length - 1] });
}



const abbreviate = s => s.replace(/\B(\w{2,})(?=\w)/g, m => m.length);
