// Database
let users = [
  {
    id: 0,
    name: "Momin raza",
    email: "momin@gmail.com",
    address: "Okara Pakistan",
    gender: "Male",
  },
  {
    id: 1,
    name: "Ali raza",
    email: "aliraza@gmail.com",
    address: "Okara Pakistan",
    gender: "Male",
  },
];

// =================== GET USERS ==================
const getUsers = (req, res) => {
  if (users) {
    res.send(users);
  } else {
    {
      res.status(404).send({ error: "users not found" });
    }
  }
};

// ================== CREATE USER ================

const createUser = (req, res) => {
  const requestData = req.body;
  console.log(requestData, "requestData");
  // validation
  if (!requestData.name) {
    res.send("Name is required");
    return;
  }

  if (!requestData.email) {
    res.send("Email is required");
  }
  if (!requestData.address) {
    res.send("Address is required");
  }
  if (!requestData.gender) {
    res.send("Gender is required");
  }

  const user = users.find((user) => user.email == requestData.email);
  if (user) {
    return res.send("User with same email already exist");
  }

  let max = 0;

  users.forEach((targetUser) => {
    if (targetUser.id > max) {
      max = targetUser.id;
    }
  });

  requestData.id = max + 1;
  users.push(requestData);
  console.log(users);

  res.send("user Successfully created");
};

// ================== GET USER DETAIL ================
const getUserDetail = (req, res) => {
  const givenId = req.params.id;
  const user = users.find((user) => user.id == givenId);
  if (user) {
    res.send(user);
  } else {
    {
      res.status(404).send({ error: "user not found" });
    }
  }
};

// ==================== DELETE USER =====================

const deleteUser = (req, res) => {
  const id = req.params.id;
  const userToDelete = users.find((user) => user.id == id);
  if (!userToDelete) {
    return res.status(404).send({ error: "User not found" });
  }
  users = users.filter((user) => user.id != id);
  return res.status(200).send({ message: "User delete success" });
};

// ================== UPDATE USER ====================

const updateUser = (req, res) => {
  const id = req.params.id;
  const userToUpdate = users.find((user) => user.id == id);
  if (!userToUpdate) {
    return res.status(404).send({ error: "User not found" });
  }

  users.forEach((user) => {
    if (user.id == id) {
      user.name = req.body.name;
      user.address = req.body.address;
      user.gender = req.body.gender;
    }
  });

  console.log(users, "updated users");
  return res.status(200).send({ message: "user update success" });
};

module.exports = {
  getUsers,
  createUser,
  getUserDetail,
  deleteUser,
  updateUser
};
