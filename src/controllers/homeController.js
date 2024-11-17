const express = require('express')

const connection = require('../config/database');
const { getAllUsers, updateuserid, deleteuserid } = require('../services/CRUDServices')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();

    return res.render('home.ejs', { listusers: results })
};
const getABS = (req, res) => {
    res.send('check ABC')
}
const thongmai = (req, res) => {

    res.render('sample.ejs')
}
const postCreateUser = async (req, res) => {
    let email = req.body.Email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log(req.body);
    // connection.query(
    //     `INSERT into 
    //     Users (email, name, city ) 
    //     values (?,?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Create user succeed');
    //     }
    // );
    let [results, fields] = await connection.query(
        `INSERT into Users (email, name, city ) values (?,?,?)`, [email, name, city],
    );
    res.send("xong");


}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpdateuser = async (req, res) => {
    const userId = req.params.id;
    let [results, fields] = await connection.query('Select * from Users where id = ? ', [userId])
    let user = results && results.length > 0 ? results[0] : {};
    res.render('edit.ejs', { useredit: user }); // truyền dữ liệu sang 
}
const postUpdateuser = async (req, res) => {
    let email = req.body.Email;
    let name = req.body.myname;
    let city = req.body.city;
    let id = req.body.id;
    console.log(req.body);
    await updateuserid(email, name, city, id)
    res.redirect('/');// trả về chỉ định
}
const getDeleteuser = async (req, res) => {
    const userId = req.params.id;
    await deleteuserid(userId)
    res.redirect('/')// trả về chỉ định
}

module.exports = {
    getHomepage, postUpdateuser, getABS, thongmai, postCreateUser, getCreatePage, getUpdateuser, getDeleteuser
}