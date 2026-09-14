const User = require('../models/user');

const index = async (req, res) => {
  try {
    const users = await User.find({}, 'username name role');
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = { index };