const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema(
 {
    // the main headline of the incident, kept short and required
    title:{
        type: String,
        required:true,
        minlength: 5,
        maxlength: 100,
    },
    // fuller explanation of what happened, required so every incident has context
    description:{
        type: String,
        required:true,
        minlength: 10,
        maxlength: 1000,
    },
    // how serious the incident is — no default, must be set explicitly on create
    severity:{
        type: String,
        enum: ['Low', 'Medium', 'High', 'Critical'],
        required: true
    },
    // where the incident stands in its lifecycle — defaults to Open when first created
    status:{
        type: String,
        enum: ['Open', 'Investigating', 'Resolved', 'Closed'],
        default: 'Open',
    },
    // the type of incident, required so every record is categorized from the start
    category:{
        type: String,
        enum: [
            'Phishing',
            'Malware',
            'Unauthorized Access',
            'Data Breach',
            'DDoS',
            'Suspicious Activity',
            'Other',
        ],
        required: true,
    },
    // links this incident to the User responsible for handling it
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
 } ,
 {timestamps: true}  // adds createdAt and updatedAt automatically
);

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;