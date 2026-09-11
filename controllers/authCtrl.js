const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const SALT_ROUNDS = 10;

const signup = async (req, res) => {
  try {
    // verify if the username already exists
    const userInDatabase = await User.findOne({ username: req.body.username });
    // if the user exists send error msg
    if (userInDatabase) {
      return res.status(409).json({ err: 'Invalid input' });
    }

    // Encrypt the password
    const hashedPassword = bcrypt.hashSync(req.body.password, SALT_ROUNDS);
    req.body.password = hashedPassword;

    // create the new user, now that the password field holds the hash instead of plain text
    const user = await User.create(req.body);

    // build the payload that goes inside the JWT — keep it small,
    // just enough to identify who this is and what they're allowed to do
    const payload = {
      username: user.username,
      _id: user._id,
      role: user.role, // needed so checkAdmin can tell analysts and admins apart later
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.status(201).json({ user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'something went wrong' });
  }
};

const login = async (req, res) => {
  try {
    const userInDatabase = await User.findOne({ username: req.body.username });

    // only allow users that exist to log in
    if (!userInDatabase) {
      return res.status(401).json({ err: 'Invalid credentials' });
    }

    // make sure the user's password matches the req.body.password
    if (!bcrypt.compareSync(req.body.password, userInDatabase.password)) {
      return res.status(401).json({ err: 'Invalid credentials' });
    }

    // There is a user AND they had the correct password. Time to make a token!
    // Avoid storing the password, even in hashed format, in the payload
    const payload = {
      username: userInDatabase.username,
      _id: userInDatabase._id,
      role: userInDatabase.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ err: error.message });
  }
};

// there's no server-side session to destroy with JWT auth —
// this route just confirms the request had a valid token,
// the frontend does the actual work of deleting it
const signout = (req, res) => {
  res.json({ message: 'Signed out successfully' });
};

const getMe = async (req, res) => {
  try {
    // req.user comes from verifyToken — it already has the decoded token payload
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(401).json({ err: 'Unauthorized' });
    }
    res.json({ user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  signup,
  login,
  signout,
  getMe,
};