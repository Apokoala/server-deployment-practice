const server = require('./server');
const supertest = require('supertest');
const request = supertest(server);

test('answertotheultimatequestion endpoint', async () => {
  const response = await request.get('/answertotheultimatequestion');
  expect(response.text).toBe('42!');
});

//force