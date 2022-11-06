function aliasGen(first, last){
    firstLetter = first.substring(0,1).toUpperCase();
    secondLetter = last.substring(0,1).toUpperCase();
    let result = "Your name must start with a letter from A - Z.";
    if(firstName.hasOwnProperty(firstLetter) && 
       surname.hasOwnProperty(secondLetter)){
        result = `${firstName[firstLetter]} ${surname[secondLetter]}`;
    }
    return(result);
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


/* 
{ A: 'Analogue',
  B: 'Bomb',
  C: 'Catalyst',
  D: 'Discharge',
  E: 'Electron',
  F: 'Faraday',
  G: 'Gig',
  H: 'Hacker',
  I: 'IP',
  J: 'Jabber',
  K: 'Killer',
  L: 'Lazer',
  M: 'Mike',
  N: 'n00b',
  O: 'Overclock',
  P: 'Payload',
  Q: 'Quark',
  R: 'Roy',
  S: 'Spy',
  T: 'T-Rex',
  U: 'Unit',
  V: 'Virus',
  W: 'Worm',
  X: 'X',
  Y: 'Yob',
  Z: 'Zombie' }
  */


// alternative solution
function aliasGen(first,last){
  let auxFirst = first[0].toUpperCase( )
  let auxLast = last[0].toUpperCase( )

  if(firstName[auxFirst] && surname[auxLast]) {
    return firstName[auxFirst] + ' ' + surname[auxLast]
  } else {
    return 'Your name must start with a letter from A - Z.'
  }
}
