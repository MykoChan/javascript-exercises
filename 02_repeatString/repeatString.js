const repeatString = function(repeatString, num) {
    if (num < 0) {
        return "ERROR";
    }
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
        repeatedString += repeatString;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
