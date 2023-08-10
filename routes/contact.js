const express = require('express');
const path = require('path');

const pathDir = require('../utils/path');
const router = express.Router();

router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(pathDir, 'views', 'contact.html'));
})

module.exports = router;