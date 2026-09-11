const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
require('./config/database');
const cors = require('cors');
const logger = require('morgan');

// Routers
const authRouter = require('./routes/authRoutes');
const threatRouter = require('./routes/threatRoutes');

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// ROUTES
app.use('/auth', authRouter);
app.use('/threats', threatRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});