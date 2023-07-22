const express = require("express");
const fs = require("fs");

const routes = express.Router();
routes.use(express.json());

routes.get('/', (req, res, next) => {
  fs.readFile("chat.txt", (err, data) => {
    if (err) {
      data = "No chat exists";
    }
    res.send(`${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name="message" id="message" />
    <input type="hidden" name="username" id="username" />
    <button type="submit">send</button>
    </form>`);
  });
});

routes.post('/', (req, res, next) => {
  fs.writeFile(
    "chat.txt",`${req.body.username}: ${req.body.message}`,{ flag: "a" },(err) => {
      err ? console.log(err) : res.redirect("/");
    }
  )
});

module.exports = routes;
