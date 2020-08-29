const express = require("express");
const app = express();

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

// https://vercel.com/docs/cli#commands/env 
// to add secrets via vercel cli: vercel add secret my-secret my-secret-value
console.log(process.env.MYSECRET); 

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

// Mock API
app.get("/users", (req, res) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
}); 

// users/by-name?name=william
app.get("/user/by-name", (req, res) => {
  // console.log(req.query["name"]); 
  switch(req.query["name"].toUpperCase()) {
    case "William".toUpperCase(): 
      res.json([
        { name: "William", location: "Abu Dhabi" },
      ]);  
      break; 
    case "Chris".toUpperCase(): 
      res.json([
        { name: "Chris", location: "Vegas" }
      ]);  
      break; 
    default: 
      res.send("404")
      return 
  }
}); 

app.post("/user", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
