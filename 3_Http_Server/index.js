const http = require('http');
const fs = require('fs');
const { URL } = require('url'); // Modern URL handling

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();

    const urlParams = new URL(req.url, `http://${req.headers.host}`); // Create a URL object
    const log = `${Date.now()}: ${req.url}\n`;

    // Append log asynchronously, separate from response logic
    fs.appendFile('./log.txt', log, (err) => {
        if (err) console.error("Error writing to log file:", err);
    });

    // Handle routes
    switch (urlParams.pathname) {
        case "/":
            res.end("This is a homepage");
            break;

        case "/about":
            res.end("This is an about page");
            break;

        case "/search":
            const search = urlParams.searchParams.get('search_query');
            if (search) {
                res.end(`These are the results of the search: ${search}`);
            } else {
                res.end("Search query parameter is missing");
            }
            break;
        case '/signup':
            if(req.method === 'GET'){
                res.end("This is a Signup Form!");
            }
            else if(req.method === 'POST'){
                //DB query
                res.end("Form Data successfully Submitted!")
            }

        default:
            res.statusCode = 404;
            res.end("404: Page not found");
    }
});

server.listen(8000, () => {
    console.log("Server is running at port 8000");
});


// 5 types of HTTP methods: 

// GET: To get any data from the server
// POST: To send data to the server so that it can process further processes.
// PUT: This method is used to PUT some data into the server like user image or any file upload.
// PATCH: To modify some changes in to the database, like changing the name pr any other thing in db.
// DELETE: To delete the data from the database, this query is made.


//To access any http method,we do it by .method function

// req.method === "GET", "POST" etc...