const convertToCelsius = function(fa) {
  if (fa == 32 ){
    return 0;
  }
  
   let ce = (fa - 32 ) * 5 / 9;
  
  return ce.toFixed(1);
};

const convertToFahrenheit = function(ce) {
  if (ce == 0 ) {
    return 32; 
  }
  let fa = ce * 9 / 5 + 32;
  return fa.toFixed(1);  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
