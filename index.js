const fs = require("fs");
const util = require("util");
// вывести содержимое js файлов по текущей папке
const readFile = util.promisify(fs.readFileSync);
const contentDir = fs.readdirSync(".");

contentDir
    .filter((f) => f.endsWith(".js"))
    .forEach(f => readFile(f, {encoding: 'utf-8'})
                .then(data => console.dir(data))
                .catch(err => console.log(err))
            );



