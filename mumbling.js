function accum(s) {
	let result = s.split("")
    .map((e,i) => new Array(i+1).fill(e.toLowerCase()).join(""))
    .map(a => a.slice(0,1).toUpperCase() + a.slice(1))
    .join("-")
  return result;
}
