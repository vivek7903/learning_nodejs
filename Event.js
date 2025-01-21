const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('checkpage',()=>{  //event handler
    console.log("Event occur")
})
emitter.on('checkpage',(data)=>{  //event handler
    console.log("Event occur",data.message)
})
emitter.on('checkpage',(data,status)=>{  //event handler
    console.log("Event occur",data.message,status)
})
emitter.emit('checkpage',{message : 'Hello world'},200) // triggers the event