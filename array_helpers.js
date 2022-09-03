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
Array.prototype.even = function () {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if(this[i] % 2 == 0){
            result.push(this[i]);
        }
    }
    return result;
};


//odd
Array.prototype.odd = function () {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if(this[i] & 1){
            result.push(this[i]);
        }
    }
    return result;
};


// using Array methods rather than loops
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }
