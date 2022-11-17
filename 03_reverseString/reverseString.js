// const reverseString = function(s) {
//     reversedString = ""
//     for (let x of s) {
//         reversedString = x + reversedString;
//     }
//     return reversedString;
// };
const reverseString = function(string) {
    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
