
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

module.exports = {
    create,
};
