function apple(x){
  let resultOver = "It's hotter than the sun!!";
  let resultUnder = "Help yourself to a honeycomb Yorkie for the glovebox."
  return x**2 > 1000 ? resultOver : resultUnder;
}


// arrow function version
const apple = x => Math.pow(x) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
