# 🟢 Node.js Static File Server

This is a basic static file server built using **Node.js** without any external libraries. It serves HTML, CSS, JavaScript, and image files based on the incoming request.

---

## 🚀 Features

- Serves static files like:
  - `index.html`
  - `.css`, `.js`, `.png`, `.jpg` files
- Returns a custom 404 page if a file is not found
- Clean MIME type handling
- Emoji-friendly response (`utf-8` support)

---

## 📁 Project Structure

- **Nginx-server/**
  - `index.js`
  - `index.html`
  - `contact.html`
  - `about.html`



---

## 🛠 How to Use

1. **Clone this repo** or copy the files into your folder:
   ```bash
   git clone https://github.com/Sohaibkundi2/NodeJS-Practice.git
   cd Nginx-server

2. Run the server 
```bash 
node index.js

3:Visit in browser:

copy and paste it.
http://localhost:3000
or 
http://localhost:3000/contact.html
http://localhost:3000/about.html
or then you can make your own ...
```

But if url does not exist then it will show error
```bash
404: Page not found 😥 
```

# 📚 Concepts Used
 http module – to create the server

fs module – to read files

path module – to handle file paths

MIME Types – to serve correct content type

utf-8 encoding – to support emojis and special characters



# 🧑‍💻 Author
## Sohaib – learning Node.js and building cool backend stuff 🚀

```pgsql
Let me know if you also want a sample `index.html` file or want to add screenshots later. 😎
```
