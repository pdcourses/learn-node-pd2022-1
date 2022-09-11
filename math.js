// sum (10,1,4,7,2,12)
const hello = 'Hello!!! ^))';
module.exports.sum = (...args) => args.reduce((total, i) => total + i , 0 );
module.exports.pow2 = (value) => value ** 2;
//module.exports = sum;
console.log('It is math module');