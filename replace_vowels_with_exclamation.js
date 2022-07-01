function replace(s){
  let vowels = "AEIOUaeiou".split("");
  vowels.map(a => s.replaceAll(s, "!");
  return s; 
}


// no replace all in Node v10
function replace(s){
  let vowels = /[AEIOU]/ig;
  s = s.replace(vowels, "!");
  return s; 
}


// simpler
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}
