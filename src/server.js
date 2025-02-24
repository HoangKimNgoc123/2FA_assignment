require('dotenv').config();
const express = require('express');
const app = express();
const webRouter = require('./routes/web.js');
const configViewEngine = require('./config/viewEngine.js');
const mysql = require('mysql2');

const port = process.env.PORT
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app);

app.get('/', (req, res) => {
    res.render('homePage.ejs', { username: 'Kim Taehyung' });
});

//khai bao route
app.use('/', webRouter);

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: '123456',
    database: 'database_asignment',
});

connection.query(
    'SELECT * FROM Users u ;',
    function (errs, results, fields) {
        console.log(" ket qua: ", results); // results contains rows returned by server
        console.log("fields: ", fields); // fields contains extra meta data about results, if available
    });
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})