const express = require('express')
const { getHomepage, getABS, thongmai } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage);
router.get('/thongmai', thongmai);
router.get('/abs', getABS);

module.exports = router;