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

        default:
            res.statusCode = 404;
            res.end("404: Page not found");
    }
});

server.listen(8000, () => {
    console.log("Server is running at port 8000");
});
