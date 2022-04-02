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
