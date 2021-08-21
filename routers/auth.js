const express = require('express');

const router = express.Router();
// const authController = require('../controllers/auth');
const auth = require('../middleware/auth');

//TODO @route   GET /auth
//TODO @decs    Verify user (test)
//TODO @access  Public
router.get('/', auth, (req, res) => res.send('Auth Route'));


module.exports = router;