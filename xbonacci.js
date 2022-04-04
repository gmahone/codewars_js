function Xbonacci(signature,n){
    let i = 0;
    while(signature.length < n){
        signature.push(signature.slice(i, signature.length).reduce( (acc,c) => acc + c));
        i++;
    }
    return signature;
}
