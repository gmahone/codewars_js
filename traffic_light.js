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
