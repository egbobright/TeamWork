const http = require('http');
const server = http.createServer();
const app = require('./app');

const PORT = process.env.PORT || 3000;



server.on('request', app)

server.listen(PORT, () => {
  console.log (`Listening on port ${PORT}`);
});
