const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const usersController = require('../controllers/users');

//TODO @route     GET /users
//TODO @decs      Register User
//TODO @access    Public
router.post(
  '/',
  check('name', 'Name is required').notEmpty(),
  check('email', 'Email not correct').isEmail(),
  check('password', 'Password not correct').isLength({ min: 6 }),
  usersController.register
);

module.exports = router;
