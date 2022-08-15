var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    return count > 0 ? Array(count).fill(1).map((e,i) => e + i).reduce((acc, c) => acc + c, 0) : 0;
  };

  return SequenceSum;

})();
