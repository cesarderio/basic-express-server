'use strict';


//jsdoc example
// /**
//  * adds to numbers together and uses a callback that takes the sum as an argument
//  * @param {Integer} a
//  * @param {Integer} b
//  * @param {Function} callback
//  */
// let adder = (a, b, callback) => {
//   let sum = a + b;
//   callback(sum);
// };


module.exports = (req, res, next) => {
  req.timestamp = new Date();
  console.log('logged at', req.timestamp);
  next();
};
