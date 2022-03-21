timeSinceMidnight = function(h, m, s){
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
}

timeSinceMidnight(h = 0, m = 1, s = 1)


/* other solutions */
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);
