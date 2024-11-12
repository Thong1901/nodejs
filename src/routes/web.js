const express = require('express')
const { getHomepage, getABS, thongmai, postCreateUser } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage);
router.get('/thongmai', thongmai);
router.get('/abs', getABS);
router.post('/create-user', postCreateUser)
module.exports = router;