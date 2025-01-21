// const a =" hey ";
// const b = " harsha ";
// const c = " padhle ";

// module.exports = {a,b,c};

const os = require('os');
console.log(os.arch());

const obj ={
    type : os.type(),
    user : os.userInfo(),
    release : os.release(),
}
console.log(obj);