//square
Array.prototype.square = function () {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result.push(this[i]**2);
    }
    console.log(result)
    return result;
};

//cube


//average


//sum
Array.prototype.sum = function () {
    var total = 0;
    for (var i = 0; i < this.length; i++) {
        total += this[i];
    }
    return total;
};

//even


//odd
