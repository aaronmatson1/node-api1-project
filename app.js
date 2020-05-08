
const express = require("express");
const db = require("./database");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "Hello from the Server!" });
});

server.get("/api/users", (req, res) => {
  const users = db.getUsers();

  if (users) {
    res.json(users);
  } else {
    res.status(500).json({
      errorMessage: "The users information could not be retrieved.",
    });
  }
});

server.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = db.getUserById(userId);

  if (user) {
    res.json(user);
  } else if (!user) {
    res
      .status(404)
      .json({ message: "The user with the specified ID does not exist." });
  } else {
    res.status(500).json({
      errorMessage: "The user information could not be retrieved.",
    });
  }
});

server.listen(5000, () => {
  console.log("Server initialized on port 5000");
});