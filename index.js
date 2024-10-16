'use strict';

import express from 'express';

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

// App
const server = express();
server.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello, we are from Capstone Project Group 1!';
  res.send(msg);
});

server.get('/health', (req, res) => {
  res.statusCode = 200;
  res.send('OK');
});

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

export default server;