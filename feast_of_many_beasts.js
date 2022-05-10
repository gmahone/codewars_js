function feast(beast, dish) {
  return(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false);
};


// arrow function version
const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;


// other solutions

// simpler solution
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
