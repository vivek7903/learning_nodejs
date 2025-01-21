const fs = require('fs');
// fs.readFile('file.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })
// const file = fs.readFileSync('file.txt',"utf-8");
// console.log(file);


// fs.writeFile('text.txt','subscribe me',(err)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log("file written successfully")
// })

fs.writeFileSync('text2.txt',"hello i am text 2",'utf-8')
console.log("file written successfully");