const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ['admin', 'analyst'],
      default: 'analyst',
    },
  },
  { timestamps: true }
);

userSchema.set('toJSON', {
  transform: (document, userObj) => {
    delete userObj.password;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;