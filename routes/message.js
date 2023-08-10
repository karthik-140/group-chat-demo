const express = require("express");
const fs = require("fs");
const path = require("path");

const pathDir = require('../utils/path');

const routes = express.Router();
routes.use(express.json());

routes.get('/', (req, res, next) => {
  fs.readFile("chat.txt", (err, data) => {
    if (err) {
      data = "No chat exists";
    }
    
    res.sendFile(path.join(pathDir, 'views', 'message.html'));
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
