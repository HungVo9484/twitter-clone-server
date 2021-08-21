const express = require('express');

const router = express.Router()

//TODO @route     GET /users
//TODO @decs      (test)
//TODO @access    Public
router.get('/', (req, res) => res.send('Users route'));

module.exports = router;