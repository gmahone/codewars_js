function calculateYears(principal, interest, tax, desired) {
    let i = 1;
    while(principal < desired){
        principal += (principal * interest - tax);
        i += 1;
    }
    return i;
}
