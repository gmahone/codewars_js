// pseudocode:
//  initialize count of d
//  loop from 0..n
//   square i
//   convert to string, split, filter by equal to d, length, add to count of d
//  end loop
//  return count of d


function nbDig(n, d) {
    let dCount = 0;
    for(let i = 0; i < (n + 1); i++){
        let temp = String(i * i).split("").filter(a => a === String(d)).length;
        dCount += temp;
    }
    return dCount;
}
// solution takes awhile but works

// other solutions
// solution using forEach
function nbDig(n, d) {
var res=0;
    for (var g=0;g<=n;g++){
      var square=(g*g+"").split("");
      square.forEach((s)=>s==d?res++:null)
    }return res;
}

// add solution using split by d
function nbDig(n, d) {
  var o = '';
    for(var i = 0; i <= n; i++){
      o += Math.pow(i, 2);
    }
  return o.split(d).length-1
}
