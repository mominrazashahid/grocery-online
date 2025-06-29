const express = require("express");
const app = express();
app.use(express.json());

const userRoutes = require("./controllers/users/users.routes");

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
