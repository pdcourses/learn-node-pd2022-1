const http = require('http');
const bcrypt = require('bcrypt');
const requestListener = require('./requestListener');
const PORT = 3000;

const password = 'admin';
const passwordHash = bcrypt.hashSync(password, 10);
console.log('password hash = ', passwordHash);


const server = http.createServer(requestListener);
server.listen(PORT);


