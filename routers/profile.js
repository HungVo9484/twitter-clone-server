const express = require('express');

const router = express.Router()

//TODO @route     GET /profile
//TODO @decs      (test)
//TODO @access    Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;