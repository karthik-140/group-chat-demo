const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');
const contactRoutes = require('./routes/contact');

app.use(bodyParser.urlencoded({extended: false}));

app.use(messageRoutes);
app.use(loginRoutes);
app.use(contactRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/success', (req, res, next) => {
   res.status(200).send("<p>form filled successfully</p>")
})

app.use((req, res, next) => {
   // res.status(404).send('<h1>Page not found</h1>')
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);