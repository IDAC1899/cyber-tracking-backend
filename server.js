const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
require('./config/database');
const cors = require('cors');
const logger = require('morgan');

// Routers
const authRouter = require('./routes/authRoutes');
const incidentRouter = require('./routes/incidentRoutes');
const threatRouter = require('./routes/threatRoutes');
const investigationRouter = require('./routes/investigationRoutes');

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// ROUTES
app.use('/auth', authRouter);
app.use('/incidents', incidentRouter);
app.use('/threats', threatRouter);
app.use('/investigations', investigationRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});