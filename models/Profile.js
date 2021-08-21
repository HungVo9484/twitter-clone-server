const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  avatar: {
    type: String
  },
  coverImage: {
    type: String
  },
  bio: {
    type: String
  },
  location: {
    type: String
  },
  website: {
    type: String
  }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)