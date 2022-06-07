function calculateYears(principal, interest, tax, desired) {
    let i = 0;
    while(principal < desired){
        principal += ((principal * interest) - (principal * interest * tax));
        i += 1;
    }
    return i;
}
