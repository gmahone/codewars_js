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

/* first name object
{ A: 'Alpha',
  B: 'Beta',
  C: 'Cache',
  D: 'Data',
  E: 'Energy',
  F: 'Function',
  G: 'Glitch',
  H: 'Half-life',
  I: 'Ice',
  J: 'Java',
  K: 'Keystroke',
  L: 'Logic',
  M: 'Malware',
  N: 'Nagware',
  O: 'OS',
  P: 'Phishing',
  Q: 'Quantum',
  R: 'RAD',
  S: 'Strike',
  T: 'Trojan',
  U: 'Ultraviolet',
  V: 'Vanilla',
  W: 'WiFi',
  X: 'Xerox',
  Y: 'Y',
  Z: 'Zero' }
  */
