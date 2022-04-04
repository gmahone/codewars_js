function Xbonacci(signature,n){
    if(n < signature.length){
        return signature.slice(0, n);
    }
    let i = 0;
    while(signature.length < n){
        signature.push(signature.slice(i, signature.length).reduce( (acc,c) => acc + c));
        i++;
    }
    return signature;
}
