let currentYear = prompt ("what year is it");
const leapYears = function() {
    if (currentYear/4===0 || currentYear/400===0){
        prompt("it is a leap year");
    } else if (currentYear/100===0) {
        prompt("it is not a leap year");
    }
};

// Do not edit below this line
module.exports = leapYears;
