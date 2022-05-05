function removeExclamationMarks(s) {
  return(s.split("").filter(a => a!="!").join(""));
}

// arrow function version
const removeExclamationMarks = s => s.split("").filter(a => a!="!").join("");


// other solutions

// regex solution
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
