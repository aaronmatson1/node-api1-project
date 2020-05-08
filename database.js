let users = [
  { id: "1", name: "Goofy", bio: "*Hiyuck* Yup! That's me!" },
  { id: "2", name: "Max", bio: "I'm Goofy's son..." },
  { id: "3", name: "Powerline", bio: "I stand out above the crowd! Even if I have to shout out loud!" },
];

function getUsers() {
  return users;
}

function getUserById(id) {
  return users.find((u) => u.id === id);
}

function createUser(data) {
  const payload = {
    id: String(users.length + 1),
    ...data,
  };

  users.push(payload);
  return payload;
}

function updateUser(id, data) {
  const index = users.findIndex((u) => u.id === id);
  users[index] = {
    ...users[index],
    ...data,
  };

  return users[index];
}

function deleteUser(id) {
  users = users.filter((u) => u.id != id);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};