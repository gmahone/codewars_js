function calculateYears(principal, interest, tax, desired) {
    let i = 0;
    while(principal < desired){
        principal += ((principal * interest) - (principal * interest * tax));
        i += 1;
    }
    return i;
}


// other solutions

// alternative formulation
function calculateYears(principal, interest, tax, desired) {
    let i = 0;
    while(principal < desired){
      principal += ((principal * interest) * (1 - tax));
      i++;
    }
    return i;
}

// solution using Math.log
function calculateYears(principal, interest, tax, desired) {
  return Math.ceil(
    Math.log(desired / principal) / 
    Math.log(1 + interest * (1 - tax))
  );
}
