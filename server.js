const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var createError = require('http-errors');
const path = require('path');

const addUser = require('./server/addUserController');
const getUsers = require('./server/getUsersController');
const middleWare =require('./middleware');

const app = express();

const port = 5000;

// create connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Sample_Store'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MYSQL database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(middleWare.setResHeader);
app.use(middleWare.setHeaderContent);
//app.use(express.static('./dist/my-app'));

//app.get('/', getUsers);
app.get('/getUser', getUsers);

app.post('/addUser', addUser);

app.get('/myApp', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/my-app/index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, req.path), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});