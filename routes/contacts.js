const express = require('express');
const router = express.Router();
const {getItems} = require('../controllers/contacts')

router.get('/', getItems);


module.exports = router;