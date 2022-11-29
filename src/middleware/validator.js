// 'use strict';



module.exports = (req, res, next) => {
  // check query string for a *name* property
  // '/person' includes ${req.query.name}
  req.query.name = '';

  console.log('Hello', req.query.name);
  //sends the request through when valid, forces an error when not
  next();
};






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
