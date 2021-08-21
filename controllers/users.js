const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

//TODO @route     POST /users
//TODO @decs      Register User
//TODO @access    Public
exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password, birthday } = req.body;

  try {
    //? Check if user exists
    let user = await User.findOne({ email });
    console.log(user);
    if (user) {
      return res.status(400).json({
        errors: [{ msg: 'User already exists' }],
      });
    }

    //? Create new user
    user = new User({ name, email, password, birthday });

    //? Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    //? Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 3600000 },
      (err, token) => {
        if (err) throw err;
        console.log(token);
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};
