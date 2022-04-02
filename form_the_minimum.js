function minValue(values){
  return Number([...new Set(values)].sort( (a,b) => a - b).join(""));
}

// other solutions
function minValue(values){
  let arr = Array.from(new Set(values))
  return parseInt(arr.sort().join(''))
}

function minValue(values){
  const n = values
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort()
    .join('');
  return Number(n);
}

function minValue(values){
  return Number(Array.from(new Set(values)).sort().join(''))
}

const minValue = (v) => +[...new Set(v)].sort().join``
