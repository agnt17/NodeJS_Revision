// The major problem with NodeJS is that to handle the req methods like get, post, put etc... we need to import differnt modules and then we need to use them using switch cases and due to this there is a lot of problems and disturbed code, to handle this we introduced ExpressJS

// ExpressJS ----> It is a node js framework that is especially build to handle the request methods to transfer data from server to client.

const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send("Hello World!");
})

app.get('/about', (req, res) => {
    return res.send("This is the about page!" + 'Hey' + req.query.name) // req.query.name is used to get the name from the url, look we don't need to require NodeJS URL module to handle query functions.
})

const myServer = http.createServer(app);
myServer.listen(8000, () => {
    console.log("Server is listening on port 8000")
})