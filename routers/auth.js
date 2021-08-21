const express = require('express');

const router = express.Router();
// const authController = require('../controllers/auth');

router.post('/', (req, res) => res.send('Auth Route'));


module.exports = router;