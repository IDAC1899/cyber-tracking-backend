
const Incident = require('../models/incident');


// CREATE - new incident from the req.body 
// return 201 for success or 400 if validation fails 
const create = async (req,res) => {
try {
  const incident = await Incident.create(req.body);
  res.status(201).json({ incident }); 
} catch (err) {
  res.status(400).json({ err: err.message }); 
}
};

// INDEX - get all incidents, populated with the assigned user's info
// returns 200 with the list, or 500 if something goes wrong
const index = async (req,res) => {
try {
  const incidents = await Incident.find({}).populate('assignedTo', 'username name');
  res.status(200).json({ incidents }); 
} catch (err) {
  res.status(500).json({ err: err.message }); 
}
};

// SHOW - get a single incident by id, populated with the assigned user's info
// returns 200 with the incident, 404 if not found, or 500 if something goes wrong

const show = async (req,res) => {
try {
  const incident = await Incident.findById(req.params.id).populate('assignedTo', 'username name');
  if(!incident){
    return res.status(404).json({ err: 'Incident not found'});
  }
  res.status(200).json({ incident });
} catch (err) {
  res.status(500).json({ err: err.message }); 
}
};

// UPDATE - update an incident by id, returns the updated document
// returns 200 with the updated incident, 404 if not found, or 400 if validation fails
const update = async (req,res) => {
try {
  const incident = await Incident.findByIdAndUpdate(req.params.id , req.body, 
    {
     // new: true returns updated doc; runValidators: true enforces schema rules on update
     new: true,
     runValidators: true,})
     .populate('assignedTo', 'username name');
  if(!incident){
    return res.status(404).json({ err: 'Incident not found'});
  }
  res.status(200).json({ incident });
} catch (err) {
  res.status(400).json({ err: err.message }); 
}
};

// DELETE - remove an incident by id
// ADMIN ONLY - restricted via checkAdmin middleware in incidentRoutes.js
// returns 200 with a confirmation message, or 404 if not found
const deleteIncident = async (req,res) => {
try {
  const incident = await Incident.findByIdAndDelete(req.params.id);
  if(!incident){
    return res.status(404).json({ err: 'Incident not found'});
  }
  res.status(200).json({ message: 'Incident deleted'});
} catch (err) {
  res.status(500).json({ err: err.message }); 
}
};

module.exports = {
    create,
    index,
    show,
    update,
    deleteIncident,
};
