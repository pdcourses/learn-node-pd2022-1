const _ = require('lodash');
const fs = require('fs');


const data = fs.readFileSync('./README.md', {
    encoding: 'utf8'
}
);
console.log(data);

console.log(_.sum([1,2,3,4]));
console.log(_.concat([1,2,3],[10,20]));


/*
require('./math');
require('./math');
require('./math');
require('./math');
require('./math');
*/


//const {sum, pow2} = require('./math');
/*
const Math = require('./math');

const result1 = Math.sum (10,1,4,7,2,12);
console.log(result1);
const result2 = Math.sum (1,1);
console.log(result2);
const result3 = Math.pow2(3);
console.log(result3);
*/