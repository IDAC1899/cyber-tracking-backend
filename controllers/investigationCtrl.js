const Investigation = require('../models/investigation');

const create = async (req, res) => {
  try {
    const investigation = await Investigation.create(req.body);
    res.status(201).json({ investigation });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};