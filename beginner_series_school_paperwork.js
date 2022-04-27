// classic function version
function paperwork(n, m) {
  return n > 0 && m > 0 ? m * n : 0;
}


// arrow function version
const paperwork = (n, m) => n > 0 && m > 0 ? m * n : 0;


// other solution
const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);
