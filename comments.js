// Create a web server
// 1. When user visits the homepage, they should see a list of comments
// 2. When user submits the form, add the comment to the list of comments
// 3. When user submits the form, redirect to the homepage
// 4. When user visits the homepage, they should see the updated list of comments

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 3000;
const commentsPath = path.join(__dirname, "comments.json");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/comments", (req, res) => {
  const comments = fs.readFileSync(commentsPath, "utf-8");
  const commentsJSON = JSON.parse(comments);
  res.send(commentsJSON);
});

app.post("/comments", (req, res) => {
  const comments = fs.readFileSync(commentsPath, "utf-8");
  const commentsJSON = JSON.parse(comments);
  commentsJSON.push(req.body);
  fs.writeFileSync(commentsPath, JSON.stringify(commentsJSON));
  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));