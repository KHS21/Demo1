const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

//first api
app.get("/", (request, response) => {
  response.send({ message: "hello world" });
});

//second api
app.get("/home", (req, res) => {
  res.send({ home: "welcome to home" });
});

const users = [
  {
    name: "john",
    age: 45,
    movie: ["pathan", "dhoom"],
  },
  {
    name: "srk",
    age: 54,
    movie: ["ddlj", "pathan"],
  },
  {
    name: "deepika",
    age: 38,
    movie: ["pathan", "race"],
  },
];

//third api
app.get("/users", (req, res) => {
  res.send({ results: users });
});

//creating an post api to add an object to users array
app.post("/add", (req, res) => {
  users.push(req.body);
  res.send({ message: "actor is added" });
});

app.listen(3000, () => {
  console.log("running in locaHost:3000");
});
