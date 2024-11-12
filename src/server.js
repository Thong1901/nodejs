const express = require('express')
require('dotenv').config();
const app = express()
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


//test connection database
//create the connection to database

//simple query
connection.query(
    'select *from Users',
    function (err, results, fields) {
        console.log(">>>results", results);
    }
);
//config template engine
configViewEngine(app);
//khai bao route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

