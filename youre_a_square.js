var isSquare = function(n){
  return(n === (Math.floor(n**0.5)**2) ? true : false);
}


// arrow function version
const isSquare = n => {n === Math.floor((n**0.5)**2) ? true : false};
