const http = require('http');
const PORT = process.env.PORT || 5000;
const HOST = '127.0.0.1'; // 'localhost'

const server = http.createServer( (req, res) => {
    const {url, method} = req;
    console.log('url', url);
    console.log('method', method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8"></meta>
        <title>Simple page</title>
    </head>
    <body>
    <h1>Home page</h1>
    <p>lorem</p>
    </body>
    </html>
    `);
});

server.listen(PORT, HOST, () => {
    console.log(`Server is listening ${HOST} on ${PORT} port!`);
});


