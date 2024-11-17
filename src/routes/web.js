const express = require('express')
const { getHomepage, getABS, thongmai, postUpdateuser, postCreateUser, getCreatePage, getUpdateuser, getDeleteuser } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage);
router.get('/thongmai', thongmai);
router.get('/abs', getABS);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser)

router.get('/update/:id', getUpdateuser)

router.post('/update-user', postUpdateuser)
router.get('/deleteuser/:id', getDeleteuser)

module.exports = router;