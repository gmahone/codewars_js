function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

function gap(g, m, n) {
    let previousPrime = undefined;
    let result = null;
    for(let i = m; i <= n; i++){
        if(isPrime(i)){
            if(g === (i - previousPrime)){
                return [previousPrime, i];
            }
            previousPrime = i;
        }
    }
    return result;
}


// simpler version
function gap(g, m, n) {
    let previousPrime = 0;
    let isPrime = function(x) { 
      for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }
    
    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - previousPrime == g) return [previousPrime, i];
            else previousPrime = i;
        }
      
    return null;
}
