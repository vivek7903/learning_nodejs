const fs = require('fs');

// input output callback
fs.readFile(__filename,()=>{
    console.log(" i am file")
})

//micro task callback
process.nextTick(()=> console.log(" i am process"));
Promise.resolve().then(()=> console.log('This is Promise'));