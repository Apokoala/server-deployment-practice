const express = require('express');
const server = express();

server.get('/answertotheultimatequestion', (_, res) => res.send('42!'));

module.exports = server;

//force