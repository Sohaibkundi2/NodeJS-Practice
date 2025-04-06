const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end('<h1>Welcome to the Home Page 🏠</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end('<h1>About Us Page 👨‍💻</h1><p>This is Sohaib\'s server.</p>');
    } else if (req.url === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end('<h1>Contact Page 📞</h1><p>Reach out to Sohaib anytime!</p>');
    } else {
        // Handle 404 (Not Found)
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end('<h1>404 - Page Not Found ❌</h1>');
    }
});

const PORT = 3000;
const localhost = '127.0.0.1';

server.listen(PORT, localhost, () => {
    console.log(`Server is running at http://${localhost}:${PORT}`);
});
