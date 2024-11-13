const express = require('express')
const { getHomepage, getABS, thongmai, postCreateUser, getCreatePage, getUpdateuser } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage);
router.get('/thongmai', thongmai);
router.get('/abs', getABS);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser)

router.get('/update/:id', getUpdateuser)


module.exports = router;