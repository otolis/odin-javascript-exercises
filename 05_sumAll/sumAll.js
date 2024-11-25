const sumAll = function(num1,num2) {
    
 if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
       return "ERROR"
   
 }
    if (num1 > num2 ) {
        [num1 , num2] = [num2 , num1];
    }
    
    let sum = (num2 * (num2 + 1) / 2) - (num1 * (num1 - 1) / 2);
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
