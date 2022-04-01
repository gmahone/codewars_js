const binaryArrayToNumber = arr => parseInt( arr.map( a => a.toString() ).join(""), 2 );

// other solutions

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};

function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}

let binaryArrayToNumber=a=>+('0b'+a.join``)
