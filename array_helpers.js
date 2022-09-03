//square
Array.prototype.square = function () {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result.push(this[i]**2);
    }
    return result;
};

//cube
Array.prototype.cube = function () {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result.push(this[i]**3);
    }
    return result;
};


//average
Array.prototype.average = function () {
    if(this.length == 0){
        return NaN;
    }
    var result = 0;
    for (var i = 0; i < this.length; i++) {
        result += this[i];
    }
    return(result / this.length);
};


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
