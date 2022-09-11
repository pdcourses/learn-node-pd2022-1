const http = require('http');
const server = http.createServer(requestListener);
server.listen(3000);

//req, res
let count = 0;
function requestListener(request, response){
    console.log('It is my first server!',(++count));
    response.end( `Hello client!!! msg # ${count}`);
}
