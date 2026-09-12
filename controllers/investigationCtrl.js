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

const show = async (req, res) => {
  try {
    const investigation = await Investigation.findById(req.params.id)
      .populate('incident')
      .populate('assignedTo', 'username name');
    if (!investigation) {
      return res.status(404).json({ err: 'Investigation not found' });
    }
    res.status(200).json({ investigation });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const investigation = await Investigation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
      .populate('incident')
      .populate('assignedTo', 'username name');
    if (!investigation) {
      return res.status(404).json({ err: 'Investigation not found' });
    }
    res.status(200).json({ investigation });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const deleteInvestigation = async (req, res) => {
  try {
    const investigation = await Investigation.findByIdAndDelete(req.params.id);
    if (!investigation) {
      return res.status(404).json({ err: 'Investigation not found' });
    }
    res.status(200).json({ message: 'Investigation deleted' });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  create,
  index,
  show,
  update,
  deleteInvestigation,
};