const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.map(user =>
    user.id === userId ? { ...user, ...req.body } : user
  );
  res.json({ message: "User updated" });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
