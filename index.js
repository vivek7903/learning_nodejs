//
// const add =require("./add");
// const sum = add(2,3);
// const sum2 = add(2,5);
// console.log(sum);
// console.log(sum2);

//     console.log("Hello world");

    //built in module
    const os = require('os');
    const a = os.freemem();
    const b = os.hostname();
    const c = os.platform();
    const d = os.userInfo();
    console.log(a,b,c,d);