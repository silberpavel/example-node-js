var array_counter = function(array) {
  return "In array " + array.length + " elements";
};

var someValue = 365;

var multiply = function(x, y) {
  return `${x} * ${y} = ${x * y}`;
};

// // Export by variable
// module.exports.someValue = someValue;


// Exports by object
module.exports = {
  array_counter: array_counter,
  someValue: someValue,
  multiply: multiply
};