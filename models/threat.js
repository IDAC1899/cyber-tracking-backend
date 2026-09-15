// models/threat.js

const mongoose = require('mongoose');

const threatSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
    },
    type: {
      type: String,
      enum: ['IP Address', 'Domain', 'URL', 'File Hash', 'Email', 'Malware'],
      required: true,

    },
    value: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
    },
    severity: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Critical'],
      required: true,
    },
    status: {
      type: String,
      enum: ['Active', 'Investigating', 'Contained', 'False Positive', 'Resolved'],
      default: 'Active',
    },
    source: {
      type: String,
      maxlength: 100,
      trim: true,
    },
    incident: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Incident',
      required: true,
    },
     createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Threat = mongoose.model('Threat', threatSchema);

module.exports = Threat;