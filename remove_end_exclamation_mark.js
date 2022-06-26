function remove (string) {
  if(string[string.length - 1] === "!"){
    string = string.substring(0,string.length-1);
  }
  return string;
}

// other solutions

// regex solution
const remove = s => s.replace(/!$/, '');


// using endsWith, ternary, and slice
function remove(string) {
  return string.endsWith('!') ? string.slice(0, -1) : string;
}
