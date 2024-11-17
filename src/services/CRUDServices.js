const connection = require("../config/database")
const getAllUsers = async () => {
    let [results, fields] = await connection.query('Select * from Users ')
    return results;
}
const updateuserid = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        `UPdate Users set email = ?, name = ? , city = ? where id = ? `, [email, name, city, id],
    );
}
const deleteuserid = async (userId) => {
    let [results, fields] = await connection.query(
        'delete from Users where id = ?', [userId]
    );
}
module.exports = {
    getAllUsers, updateuserid, deleteuserid
}