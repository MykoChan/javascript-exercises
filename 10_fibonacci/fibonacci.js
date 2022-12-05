const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    if (num == 0) return 0;
    f = [1, 1]
    for (let i = 2; i < num; i++) {
        f.push(f[i-2]+f[i-1]);
    }
    return f[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
