const fs = require('fs');

const filePath = 'files.json';

// Function to safely read and parse JSON
function readTasks() {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        return [];
    }
}

// Ensure the file exists and contains valid JSON
if (!fs.existsSync(filePath) || fs.readFileSync(filePath, 'utf-8').trim() === '') {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

function addTask(task) {
    if (!task) return console.log("❌ Please provide a task description.");
    
    const tasks = readTasks();
    tasks.push({ task, done: false, createdAt: new Date().toLocaleString() });
    
    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
        console.log(`✅ Task added: ${task}`);
    } catch (error) {
        console.log("❌ Error writing to file:", error.message);
    }
}

function viewTasks() {
    const tasks = readTasks();
    if (!tasks.length) return console.log("📌 No tasks found.");

    console.log("\n📝 Your Tasks:");
    tasks.forEach((t, index) => {
        console.log(`${index + 1}: [${t.done ? '✔' : '✗'}] ${t.task} (Created: ${t.createdAt})`);
    });
}

function deleteTask(index) {
    const tasks = readTasks();
    if (index < 1 || index > tasks.length) return console.log("❌ Invalid task number.");

    const removed = tasks.splice(index - 1, 1);
    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
        console.log(`🗑 Deleted task: ${removed[0].task}`);
    } catch (error) {
        console.log("❌ Error writing to file:", error.message);
    }
}

// ✅ Mark Task as Done / Undo Completion
function markTaskDone(index) {
    const tasks = readTasks();
    if (index < 1 || index > tasks.length) return console.log("❌ Invalid task number.");

    tasks[index - 1].done = !tasks[index - 1].done; // Toggle completion
    tasks[index - 1].completedAt = tasks[index - 1].done ? new Date().toLocaleString() : null;

    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
        console.log(`✔ Task updated: ${tasks[index - 1].task} (${tasks[index - 1].done ? 'Completed' : 'Not Completed'})`);
    } catch (error) {
        console.log("❌ Error writing to file:", error.message);
    }
}

// 🛠 Handling Terminal Commands
const command = process.argv[2];
const argument = process.argv.slice(3).join(" ");

switch (command) {
    case "add":
        addTask(argument);
        break;
    case "view":
        viewTasks();
        break;
    case "remove":
        deleteTask(parseInt(argument));
        break;
    case "done":
        markTaskDone(parseInt(argument));
        break;
    default:
        console.log("\n📌 Usage:");
        console.log("  node index.js add 'Task Description'   ➝ Add a task");
        console.log("  node index.js view                     ➝ View all tasks");
        console.log("  node index.js remove <Task Number>     ➝ Remove a task");
        console.log("  node index.js done <Task Number>       ➝ Mark a task as done / undo");
}
