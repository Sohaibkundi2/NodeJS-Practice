# 📝 Notes on Node.js File System (fs) Module
📂 **Folder: `NodeJS-Practice/fs-module`**  

## 📌 Introduction
## 📂 What is `fs`?

`fs` stands for **File System**, and it is a built-in Node.js module that allows you to interact with the file system on your computer. Using `fs`, you can **read**, **write**, **delete**, and **modify** files and directories directly from your Node.js application.

The `fs` module in Node.js allows you to interact with the **file system** for reading, writing, deleting, and modifying files.

## 🚀 File Operations in Node.js
| Method | Description |
|--------|------------|
| `fs.writeFileSync(file, data)` | Creates or overwrites a file with the given data. |
| `fs.readFileSync(file, 'utf-8')` | Reads a file and returns its content as a string. |
| `fs.appendFileSync(file, data)` | Appends data to a file without overwriting it. |
| `fs.unlinkSync(file)` | Deletes a file. |
| `fs.existsSync(file)` | Checks if a file exists. |
| `fs.renameSync(oldPath, newPath)` | Renames or moves a file. |


## 🛠 Task Manager Commands
This project is a simple **CLI Task Manager** that allows you to **add, view, delete, and mark tasks as done** using the terminal.

### ✅ Available Commands
```sh
node index.js add "Learn Node.js"
node index.js view
node index.js done 1
node index.js remove 2


✅ **Your commands are now documented!**  

### 1️⃣ Add a Task

node index.js add "Complete my project"
✅ Task added: Complete my project

### 2️⃣ View All Tasks
node index.js view
📝 Your Tasks:
1: [✗] Complete my project (Created: 04/02/2025, 10:30 AM)

### 3️⃣ Mark Task as Done
node index.js done 1
✔ Task updated: Complete my project (Completed)

### 4️⃣ Remove a Task
node index.js remove 1
🗑 Deleted task: Complete my project


## 🔹 Handling Errors
1. If the task number doesn't exist:
2. If the JSON file is empty or corrupted:


## 📂 Project Structure
fs-module/ 
│── index.js # Task manager code 
│── files.json # Stores tasks 
└── README.md # Notes & Documentation

## 📌 Summary
- We used the **fs module** to manage tasks in a JSON file.
- Commands allow adding, viewing, removing, and marking tasks as **done/undone**.
- Error handling prevents crashes and ensures smooth execution.

