const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) =>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/"><input type="text" id="username" name="username" placeholder="username" /><button type="submit">submit</button></form>')
})


module.exports = router;