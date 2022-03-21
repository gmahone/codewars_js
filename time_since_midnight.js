timeSinceMidnight = function(h, m, s){
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
}

timeSinceMidnight(h = 0, m = 1, s = 1)
