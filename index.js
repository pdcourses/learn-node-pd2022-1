const http = require('http');
const PORT = process.env.PORT || 5000;
const HOST = '127.0.0.1'; // 'localhost'
const requestListener = require('./requestListener');

const server = http.createServer(requestListener);

server.listen(PORT, HOST, () => {
    console.log(`Server is listening ${HOST} on ${PORT} port!`);
});


