const os = require('os');
const fs = require('fs');
const util = require('util');
const path = require('path');

/*
const userHostname = os.hostname();
console.log(userHostname);
console.log(os.homedir());
console.log(os.cpus());
console.log(os.userInfo());

// чтение файла синхронно
const text1 = fs.readFileSync('./README.md', {
    encoding:'utf-8'
});
console.log('Sync file reading');
console.log(text1);

// чтение файла асинхронно
const text2 = fs.readFileSync('./README.md', 
    {encoding:'utf-8'},
    (err, data) => {
        if(err){console.log('Error.', err);} 
        else{ console.log('Data', data);}
    }
);
console.log('Async file reading');
console.log(text2);

// сделать на промисах чтение файла
/*
пример
const util = require('util');
const fs = require('fs');
const stat = util.promisify(fs.stat);
stat('.').then((stats) => { // Do something with `stats`})
    .catch((error) => {// Handle the error.});
*/
console.log('Async file reading with promises');

const myReadFile = util.promisify(fs.readFileSync);

myReadFile('./README.md', {encoding:'utf-8'})
.then(data => console.log('Data', data))
.catch(err => console.log('Error', err));

// console.log('process', process.env);   //переменные окружения
console.log('__filename', __filename);
console.log('__dirname', __dirname);

// чтение текущей папки
const contentDir = fs.readdirSync('.');
console.log(contentDir)

