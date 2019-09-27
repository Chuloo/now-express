const express = require("express");
const app = express();

const port = 8080;

// Body parser
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", (req, res) => {
  res.send("Welcome . Thats all folks!!! Hey no rebase cmd in draft!");
});

// Mock API
app.get("/users", (req, res) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});

app.post("/user", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 8080
Visit http://localhost:8080`);
});
