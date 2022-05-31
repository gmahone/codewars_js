function gooseFilter (birds) {
  let result = birds;
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for(let i = 0; i < geese.length; i++){
    result = result.filter(a => a !== geese[i]);
  }
  return result;
};


// other solutions

// solution using includes
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};
