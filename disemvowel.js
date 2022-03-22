function disemvowel(str) {
  let vowels = [/a/g, /e/g, /i/g, /o/g, /u/g, /A/g, /E/g, /I/g, /O/g, /U/g];
  
  for(i = 0; i < vowels.length; i++){
    str = str.replace(vowels[i], "");
  }
  
  return str;
}


/* other solutions */

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

disemvowel = str => str.replace(/[aeiou]/gi,'');

function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}
