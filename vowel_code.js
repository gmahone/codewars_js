function encode(string) {
  let vowels = {"a":1, "e":2, "i":3, "o":4, "u":5};
  return string
  .split("")
  .reduce( (acc,c) => vowels[c] ? acc + vowels[c] : acc + c, "" );
}

function decode(string) {
  let vowels = {"1":"a", "2":"e", "3":"i", "4":"o", "5":"u"};
  return string
  .split("")
  .reduce( (acc,c) => vowels[c] ? acc + vowels[c] : acc + c, "" );
}

// other solutions

// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}

//

function encode(string){
  var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  return codeStringGivenMapping(string, vowelMapping);
}

function decode(string){
  var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
  return codeStringGivenMapping(string, vowelMapping); 
}

function codeStringGivenMapping(string, mapping){
  return string.split('').map(function(char){
    return mapping[char] || char;
  }).join(''); 
}

//

const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

// 

const obj = {a: 1, e: 2, i: 3, o: 4, u: 5};

const encode = string =>
  string.replace(/[aeiou]/g, val => obj[val]);

const decode = string =>
  string.replace(/[1-5]/g, val => Object.keys(obj)[--val]);
