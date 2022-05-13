function updateLight(current) {
  return(current == "green" ? "yellow" : current == "yellow" ? "red" : "green");
}


// other solutions

// arrow function via object
const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current]


// normal function using switch statements
function updateLight(current){
  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
      break;
    default:
      throw 'Error: incorrect input';
      break;
  } 
}
