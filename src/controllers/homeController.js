const express = require('express')

const connection = require('../config/database');

const getHomepage = (req, res) => {
    let users = [];

    connection.query('select *from Users',
        function (err, results, fields) {
            users = results;
            console.log(">>>results", results);

            res.send(JSON.stringify(users))
        }
    );
};
const getABS = (req, res) => {
    res.send('check ABC')
}
const thongmai = (req, res) => {

    res.render('sample.ejs')
}
module.exports = {
    getHomepage, getABS, thongmai
}