const fileSystem = require("fs");


// ---------Writing a File-----------------
fileSystem.writeFileSync('./test.txt', "Hello world! this is a synchrounous file!");

fileSystem.writeFile('./test2.txt', 'Hello world! this is a Asynchrounous file', (err)=>{});


// // ---------Reading a File-----------------
const result = fileSystem.readFileSync('./test2.txt', "utf8")
console.log(result);

fileSystem.readFile('./test2.txt', "utf8", (err, result1)=>{
    if(err){
        console.log("error", err);
    }
    else{
        console.log(result1);
    }
})


// Now the difference b/w sync and non sync or async is that async calls do not return anything that is why we dont have assigned a variable like result to them instead of that we just passed a callback function so that we can decide what are the next steps after recieving a result.

// Look callbacks are very much necessary stuff when you are dealing with asynchronous calls. They are bound to be there and they must exist so that our code does not behave abruptly.



// These functions just rewrite or overwrite the files, so if we want to add more data to the files spo that previous data persists, then we have append function for that.

fileSystem.appendFileSync("./test2.txt", `Current Time is: ${new Date().getTime()}`);

//copying a file: 

fileSystem.cpSync("./test2.txt", "./copy.txt");

// Deleting a file:

fileSystem.unlinkSync("./copy.txt");

//Status of the file
console.log(fileSystem.statSync("./test.txt"))




// Blocking and Non Blocking requests

// the requests that use sync at last are the blocking requests means they work synchronously and they will let the next requests only execute when they finished up executing.

//Contrary to the Blocking requests, the requestes that dont use sync dont block the code, they use the concept of event loop to non block the requests