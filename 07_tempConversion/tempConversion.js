const convertToCelsius = function(fareneight) {
  return (fareneight-32)/1.8
};

const convertToFahrenheit = function(celcius) {
  return (celcius*1.8)+32 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
