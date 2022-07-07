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
