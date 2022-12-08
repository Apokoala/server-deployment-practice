const server = require('./server');
const supertest = require('supertest');
const request = supertest(server);

test('answertotheultimatequestion endpoint', async () => {
  const response = await request.get('/answertotheultimatequestion');
  expect(response.text).toEqual('42!');
});

//force
