function combineNames(first, last){
  return `${first} ${last}`;  
}


// arrow function with spread and join
const combineNames = (...names) => names.join(' ');
