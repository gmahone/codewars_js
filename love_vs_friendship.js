function charConverter(letter, num){
    if(letter === String.fromCharCode(97 + num)){
        return num+1;
    } else {
        return charConverter(letter, num+1);
    }
}

function wordsToMarks(string){
    return string.split("").map( a => charConverter(a, 0)).reduce( (acc, c) => acc + c, 0);
}

// other solutions

const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}

function wordsToMarks(string) {
  return string.split('').reduce((acc, char) => {
    return acc + char.charCodeAt() - 96;
  }, 0);
}

function wordsToMarks(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let marks = 0;
  string.split('').forEach((char) => {
    marks += alphabet.indexOf(char) + 1;
  });
  return marks;
}

const wordsToMarks = (abc) =>  [0,...abc].reduce(($, b) => $ + ' abcdefghijklmnopqrstuvwxyz'.indexOf(b))

const wordsToMarks = s => [...s].map((a,i) => s.charCodeAt(i)-96).reduce((a,b) => a+b);
