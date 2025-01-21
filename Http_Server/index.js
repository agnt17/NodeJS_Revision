const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} \n`;
    fs.appendFile('./log.txt', log, (err, data)=>{
        switch(req.url){
            case "/":
                res.end("This is a homepage");
            case "/about":
                res.end("This is an about page");
            
                
        }
    })
})

server.listen(8000, ()=>{
    console.log("Server is running at port 8000")
})