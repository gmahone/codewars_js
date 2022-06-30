function accum(s) {
	let result = s.split("")
    .map((e,i) => new Array(i+1).fill(e.toLowerCase()).join(""))
    .map(a => a.slice(0,1).toUpperCase() + a.slice(1))
    .join("-")
  return result;
}


// solution not using Array but rather repeat
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
