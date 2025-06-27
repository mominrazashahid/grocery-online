const express = require("express");
const app = express();
app.use(express.json());

// Database
const users = [
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

// get - get data from server
// POST - save data to server
// PUT - update data to server
// DELETE - delete data from server

//  get user info
app.get("/get-user/:id", (req, res) => {
  const givenId = req.params.id;
  const user = users.find((user) => user.id == givenId);
  if (user) {
    res.send(user);
  } else {
    {
      res.send("user not found");
    }
  }
});

// create user
app.post("/create-user", (req, res) => {
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
});

// update user
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

// delete user
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
