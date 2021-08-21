const express = require('express');

const router = express.Router()

//TODO @route     GET /posts
//TODO @decs      (test)
//TODO @access    Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;