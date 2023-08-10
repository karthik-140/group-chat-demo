const express = require('express');
const path = require('path');

const pathDir = require('../utils/path');

const router = express.Router();

router.get('/login', (req, res, next) =>{
    //res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/"><input type="text" id="username" name="username" placeholder="username" /><button type="submit">submit</button></form>')
    res.sendFile(path.join(pathDir, 'views', 'login.html'))
})


module.exports = router;