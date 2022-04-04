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

// other solutions
const Xbonacci = (sig, n) => {
  let len = sig.length;
  for (let i = len; i < n; i++) 
    sig[i] = sig.slice(i - len).reduce((a, b) => a + b);
  return sig.slice(0, n);
}

function Xbonacci(s, n){
  var len = s.length, i = len - 1;
  while (i++ < n) {
    s[i] = s.slice(i - len).reduce(sum, 0);
  }
  return s.slice(0, n);
}

function sum(s, v){ return s + v }

function Xbonacci(signature, n){
  var result = signature.slice(0, n);
  var length = signature.length;
  for (var index = length; index < n; index++){
    result[index] = 0;
    for (var index2 = 1; index2 <= length; index2++){
      result[index] += result[index - index2];
    }
  }
  return result;
}


function Xbonacci(arr, n){
  const result = arr.slice(0, n)
  const length = arr.length
  while (result.length < n) {
    result.push(result.slice(-length).reduce((a, b) => a + b))
  }
  return result
}   

// recursive
const Xbonacci = (signature, n, l = signature.length) =>
  signature.length < n ? Xbonacci([...signature, signature.slice(signature.length - l).reduce((pre, val) => pre + val)], n, l) : signature.slice(0, n);

