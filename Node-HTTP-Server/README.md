# Node.js Simple HTTP Server

This is a basic Node.js HTTP server with multiple routes (`/`, `/about`, and `/contact`). It serves simple HTML content and demonstrates routing, UTF-8 encoding, and basic error handling for a 404 page.

## Features:
- Simple Node.js server using the `http` module.
- Three routes: 
  - `/` (Home Page)
  - `/about` (About Page)
  - `/contact` (Contact Page)
- Handles 404 errors for undefined routes.
- UTF-8 character encoding for handling special characters (like emojis).

## Installation:

1. **Clone the repository** or download the files.

2. **Navigate to the project folder**:
   ```bash
   cd Node-HTTP-Server
3. Run the server:
```bash
node server.js
```
4. Access the server: Open your browser and go to:
- http://127.0.0.1:3000/ (Home Page)
- http://127.0.0.1:3000/about (About Page)
- http://127.0.0.1:3000/contact (Contact Page)
- Try an undefined route like http://127.0.0.1:3000/random for a 404 error.


## Project Structure:
```bash
NodeJS-Practice/
│
├── index.js        # The main Node.js HTTP server file
└── README.md        # This README file
```