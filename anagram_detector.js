var isAnagram = function(test, original) {
  return test.toUpperCase().split("").sort().reduce( (acc,c) => acc + c) === 
    original.toUpperCase().split("").sort().reduce( (acc,c) => acc + c);
};
