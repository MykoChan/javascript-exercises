const palindromes = function (s) {
    const transformedString = s.toLowerCase().replace(/[^a-z]/g, "");    
    return transformedString
    .split("")
    .reverse()
    .join("") === transformedString;
};

// Do not edit below this line
module.exports = palindromes;
