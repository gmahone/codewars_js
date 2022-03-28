function couponChecker(a,b,c,d){
    let couponDate = new Date(c);
    let couponExpiration = new Date(d);
    return couponExpiration >= couponDate ? true : false;
}

function couponChecker(a,b,c,d){
    let couponDate = new Date(c);
    let couponExpiration = new Date(d);
    return a === b & couponExpiration >= couponDate ? true : false;
}

function couponChecker(a,b,c,d){
    return a === b & new Date(d) >= new Date(c) ? true : false;
}

// entered - but should have used logical && rather than bitwise &!
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode & new Date(expirationDate) >= new Date(currentDate) ? true : false;
}

// add other solutions
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
}
