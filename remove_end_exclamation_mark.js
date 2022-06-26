function remove (string) {
  if(string[string.length - 1] === "!"){
    string = string.substring(0,string.length-1);
  }
  return string;
}

// other solutions

// regex solution
const remove = s => s.replace(/!$/, '');
