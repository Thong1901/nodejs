const express = require('express')

const connection = require('../config/database');
const e = require('express');

const getHomepage = (req, res) => {
    return res.render('home.ejs')
};
const getABS = (req, res) => {
    res.send('check ABC')
}
const thongmai = (req, res) => {

    res.render('sample.ejs')
}
const postCreateUser = (req, res) => {
    let email = req.body.Email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log(req.body);
    connection.query(
        `INSERT into 
        Users (email, name, city ) 
        values (?,?,?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Create user succeed');
        }
    );
}
module.exports = {
    getHomepage, getABS, thongmai, postCreateUser
}