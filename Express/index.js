import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // for parsing application/json

// Fake "Database"
let users = [
  { id: 1, name: 'Sohaib' },
  { id: 2, name: 'Ali' }
];

// 🔹 READ all users
app.get('/users', (req, res) => {
  res.json(users);
});

// 🔹 READ a single user
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// 🔹 CREATE a new user
app.post('/users',(req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
})

// 🔹 UPDATE a user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  user.name = req.body.name;
  res.json(user);
});

// 🔹 DELETE a user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.send('User deleted successfully');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
