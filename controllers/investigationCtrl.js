const Investigation = require('../models/investigation');
const User = require('../models/user');
const sendEmail = require('../services/emailService');

const create = async (req, res) => {
  try {
    const investigation = await Investigation.create(req.body);
    await investigation.populate('incident');
    await investigation.populate('assignedTo', 'username name');

    const assignedUser = await User.findById(req.body.assignedTo);
    if (assignedUser?.email) {
      try {
        await sendEmail({
          to: assignedUser.email,
          subject: 'You have been assigned an investigation',
          text: `Hi ${assignedUser.name}, you've been assigned a new investigation: "${investigation.title}".`,
        });
      } catch (emailError) {
        console.log('Email could not be sent:', emailError.message);
      }
    }

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
      .populate('assignedTo', 'username name')
      .populate('lastEditedBy', 'username name');
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
    const updates = { ...req.body, lastEditedBy: req.user._id };
    const investigation = await Investigation.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    )
      .populate('incident')
      .populate('assignedTo', 'username name')
      .populate('lastEditedBy', 'username name');
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