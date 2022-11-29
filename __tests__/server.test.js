
const { app, start } = require('../src/server');

const supertest = require('supertest');
const request = supertest(app);


describe('APIServer', () => {
  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response).status.toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello World!!!');
  });

});
