const fs = require('fs')
const path = require('path')

//create a folder
// fs.mkdir(path.join(__dirname, 'test'),{},(err)=>{
//     if(err) throw err
//     console.log('folder created');
// })

//create and write to file
// fs.writeFile(path.join(__dirname, 'test','hello.txt'),'hello', (err) => {
//     if(err) throw err
//     console.log('file created');
// })

//append to file
// fs.writeFile(path.join(__dirname, 'test','hello.txt'),'hello', (err) => {
//     if(err) throw err
//     console.log('file created');

//     //file append
//     fs.appendFile(path.join(__dirname,'test', 'hello.txt'), 'hello again!', (err) => {
//         if(err) throw err
//         console.log('file appended');
//     })
// })

//read file
fs.readFile('reference/test/hello.txt',"utf8", (err,data) => {
    if(err) throw err
    console.log(data);
})

fs.rename
(path.join(__dirname,'test','hello.txt'),
path.join(__dirname,'test','helloworld.txt'),
(err,data) => {
    if(err) throw err
    console.log('file renamed');
})