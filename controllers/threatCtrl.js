// controllers/threatCtrl.js

const Threat = require('../models/threat');

const create = async (req, res) => {
  try {
    req.body.createdBy = req.user._id;
    const threat = await Threat.create(req.body);
    res.status(201).json({ threat });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const index = async (req, res) => {
  try {
    const threats = await Threat.find({}).populate('incident');
    res.status(200).json({ threats });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const show = async (req, res) => {
  try {
    const threat = await Threat.findById(req.params.id).populate('incident');
    if (!threat) {
      return res.status(404).json({ err: 'Threat not found' });
    }
    res.status(200).json({ threat });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const existingThreat = await Threat.findById(req.params.id);
    if (!existingThreat) {
      return res.status(404).json({ err: 'Threat not found' });
    }

    // analysts can only edit their own records — admins can edit anything
    if (req.user.role !== 'admin' && !existingThreat.createdBy.equals(req.user._id)) {
      return res.status(403).json({ err: 'You can only update threats you created' });
    }

    const threat = await Threat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ threat });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// admin only — enforced by checkAdmin in the router, not here
const deleteThreat = async (req, res) => {
  try {
    const threat = await Threat.findByIdAndDelete(req.params.id);
    if (!threat) {
      return res.status(404).json({ err: 'Threat not found' });
    }
    res.status(200).json({ message: 'Threat deleted' });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  create,
  index,
  show,
  update,
  deleteThreat,
};