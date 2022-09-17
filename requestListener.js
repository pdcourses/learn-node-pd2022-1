const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const requestListener = (req, res) => {
    const {url, method} = req;
    const page = url == '/' ? 'index.html' : url;
    const regPage = /^.*\.html$/;
    if(regPage.test(page)){
        const pagePath = path.join(__dirname, '/pages/', page);
        readFile(pagePath).then(data => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }).catch(err => {
            res.statusCode = 500;
            res.end('Server error');
        })
    }
    switch(method){
        case 'GET': { 
            break;
        }
        default: {
            res.statusCode = 400;
            res.end('Bad request ((( ');
        }
    }
}

module.exports = requestListener;