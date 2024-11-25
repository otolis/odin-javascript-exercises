const leapYears = function(year) {
    if ( year%400 == 0 || year%4 == 0){
        if (year == 1600 ){
            return true;
        } else if (year%100==0){
            return false;
        }
        return true; 

    } 
    if (year % 2 !== 0){
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
