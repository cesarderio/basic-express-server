// 'use strict';

module.exports = (req, res, next) => {
  // check query string for a *name* property
  // '/person' includes ${req.query.name}
  if (req.query.name) {
    next();
  } else {
    next('query name required');
  }


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
