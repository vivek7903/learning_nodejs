// const imp = require("./export");
// console.log(imp.b);

// const data = require('./example');
// console.log(data.name.person);

// const msg = require('./example');
// msg.sayHello();
// msg.sayThanks();
exports.sayHello = 'Hello world';

function sayThanks(){
    console.log('Thank you');
}
module.exports = sayThanks;
console.log(module);