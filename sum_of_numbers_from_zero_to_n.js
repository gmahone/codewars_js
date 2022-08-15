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


// looping solution
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var sum = 0;
    var str = "";
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return count + "<0";
    } else {
      for (var i = 0; i < count; i++) {
        sum += i;
        str += i + "+";
      };
    sum += count;
    str += count + " = " + sum;
    return str;
    };
  };

  return SequenceSum;

})();
