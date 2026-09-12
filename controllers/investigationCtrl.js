const Investigation = require('../models/investigation');

const create = async (req, res) => {
  try {
    const investigation = await Investigation.create(req.body);
    res.status(201).json({ investigation });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const index = async (req, res) => {
  try {
    const investigations = await Investigation.find({})
      .populate('incident')
      .populate('assignedTo', 'username name');
    res.status(200).json({ investigations });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

