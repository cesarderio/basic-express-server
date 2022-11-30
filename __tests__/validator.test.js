'use strict';

const validator = require('../src/middleware/validator');

describe('Logger middleware', () => {
  let req = {query:{name:'Raphael'}};
  let res = {};
  let next = jest.fn(); // mocking the next method


  it('calls next as expected', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
    expect(next).not.toHaveBeenCalledWith('this should fail');
  });
});
