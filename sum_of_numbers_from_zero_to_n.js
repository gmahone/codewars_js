var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    
    if(count < 0){
      return `${count}<0`;
    }
    if(count === 0){
      return "0=0";
    }

    let result1 = Array(count+1).fill(0).map((e,i) => e + i);
    
    return result1.join("+") + " = " + result1.reduce((acc, c) => acc + c, 0);
  };

  return SequenceSum;

})();
