const express = require('express');

const router = express.Router();
// const authController = require('../controllers/auth');

//TODO @route     GET /auth
//TODO @decs      (test)
//TODO @access    Public
router.get('/', (req, res) => res.send('Auth Route'));


module.exports = router;