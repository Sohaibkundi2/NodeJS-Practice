const http = require('http');          // Built-in module to create an HTTP server
const fs = require('fs');              // File system module to read files
const path = require('path');          // Path module to handle file paths

const port = 3000;                     // Port number for server

// Create HTTP server
const server = http.createServer((req, res) => {

    // Determine the file path based on the request
    const filePath = path.join(__dirname, req.url === "/" ? 'index.html' : req.url);

    // Get the file extension (e.g., .html, .css)
    const extName = String(path.extname(filePath)).toLowerCase();

    // Define supported MIME types
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg'
    };

    // Set content type based on file extension
    const contentType = mimeTypes[extName] || 'application/octet-stream';

    // Read the requested file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                // File not found
                res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
                res.end("<h1>404: Page not found 😥</h1>");
            } else {
                // Other server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success: Send the file content
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Start the server
server.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
});
