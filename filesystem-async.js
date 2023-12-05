const fs = require('fs')

/* async operations of filesystem
*read file fs.readFile(filename, encoding, callback)
write file fs.writeFile(filename, filedata, callback)
* append file fs.appendFile(filename, filedata, callback)
open file fs.open(filename, mode, callback)
* delete file fs.unlink(filename)
File Permissions
* r - open file for reading, An exception occurs if the file does not exist
* r+ -Open file for reading and writing, An exception occurs if the file does not exist
* rs Open file for reading in synchronous mode.
* w - Open file for writing. The file is created (if it does not exist) or truncated (if it existed)
* w+ - Open file for reading and writing. The file is created (if it does not exist) or truncated
*/
// write file
const filename = "./README.md";
const filename1 = "./test.txt";
const fileData = "India\n";

// Reading a File async
fs.readFile(filename,'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log(data)
    }
})

//Writing to a File async
fs.writeFile(filename1,fileData,(err)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log("Written to file successfully")
    }
})


//Append to a File async
fs.appendFile(filename1,fileData,(err)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log("appended to file successfully")
    }
})

//Open and read a file async
fs.open(filename1,'r', (err, fd)=>{
    if(err){
        console.log(err)
    }
    else {
        fs.readFile(fd,'utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }
            else {
                console.log("file Read successfully\n" +data)
            }
        })
    }
})

//Delete a file async
fs.unlink(filename1,(err,result)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log("File Deleted Successfully")
    }
})