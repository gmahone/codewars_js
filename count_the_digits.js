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
        console.log(temp);
        dCount += temp;
    }
    return dCount;
}
// solution takes awhile but works
