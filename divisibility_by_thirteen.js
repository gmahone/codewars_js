// this attempt times out
function thirt(n){
    let multArray = [1,10,9,12,3,4]
    let prev_n = n;
    let loop = true;
    let split_n
    while(loop){
        split_n = prev_n.toString().split("").reverse().map( a => Number(a));
        for(let i = 0; i < split_n.length; i++){
            split_n[i] = split_n[i] * multArray[i];
        }
        split_n = split_n.reduce((acc,c) => acc + c);
        if(split_n !== prev_n){
            prev_n = split_n
        } else {
            loop = false;
        }
    }
    return split_n;
}

// add other solutions

function thirt(n) {
  const nums = [1,10,9,12,3,4]
  var sum = (''+n).split('').reverse().reduce((sum,v,i) => sum + v * nums[i%nums.length], 0)
  return sum === n ? n : thirt(sum)
}


const getNum = n => [1, 10, 9, 12, 3, 4][n % 6];

const thirt = n => {
  let result = [...`${n}`].reverse().reduce((s, v, i) => s + v * getNum(i), 0);
  return result === n ? result : thirt(result);
}

function thirt(n) {
  let r = [...(n+'')].reverse().reduce((t, d, i) => t + d * (Math.pow(10, i) % 13), 0);
  return n === r ? n : thirt(r);
}


function thirt(n) {
    var w = [1, 10, 9, 12, 3, 4];
    while (true) {
        var r = n, q = -1, c = 0, j = 0;
        while (q !== 0) {
            q = Math.floor(r / 10);
            c += (r % 10) * w[j % 6];
            r = q;
            j++;
        }
        if (c === n) 
            return c;
        n = c;
    }
}

const thirt = n =>
  n < 100 ? n : thirt([...`${n}`].reverse().reduce((pre, val, idx) => pre + 10 ** idx % 13 * val, 0));

thirt=(a,b=[1,10,9,12,3,4])=>a<100?a:thirt([...''+a].reverse().map((e,i)=>e*b[i%6]).reduce((a,b)=>a+b))
