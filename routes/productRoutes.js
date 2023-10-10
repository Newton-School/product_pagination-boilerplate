const express = require('express');

const { paginate } = require('../controllers/productController');

const router = express.Router();

router.get('/paginate', paginate);

module.exports = router;
