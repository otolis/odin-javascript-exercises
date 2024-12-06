const palindromes = function (str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
