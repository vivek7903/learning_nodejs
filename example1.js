const fs = require('fs');

//reading file in asynchornous way
fs.readFile('/Users/imac/Desktop/ant hi aarambh hai/Node js/file1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

// reading file in synchoronus way
const fileContent = fs.readFileSync('/Users/imac/Desktop/ant hi aarambh hai/Node js/file.txt','utf-8');
console.log(fileContent);

//writting file in asynchoronus way
// fs.writeFile('/Users/imac/Desktop/ant hi aarambh hai/Node js/text.txt','hey i am text',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('file written successfully');
// })

//writing file in synchornous way
fs.writeFileSync('/Users/imac/Desktop/ant hi aarambh hai/Node js/text2.txt','hey i am synchornous text','utf-8');
console.log('file written successfully');

// creating a folder
fs.mkdir('/Users/imac/Desktop/ant hi aarambh hai/Node js/new_directoy',(err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('directory created');
})

//to remove a folder
fs.rmdir('/Users/imac/Desktop/ant hi aarambh hai/Node js/new_directoy',(err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('directory removed');
})

// to remove a file
fs.unlinkSync('/Users/imac/Desktop/ant hi aarambh hai/Node js/file1.txt')
console.log('donee....')