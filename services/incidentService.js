const Incident = require('../models/incident');

async function createIncident(data) {
  return Incident.create(data);
}

module.exports = { createIncident };