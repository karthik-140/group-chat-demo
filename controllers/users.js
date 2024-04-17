const path = require('path');

const pathDir = require('../utils/path');

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(pathDir, 'views', 'contact.html'));
}

exports.postContact = (req, res, next) => {
    res.redirect('/success');
}
