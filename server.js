const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
require('./config/database');
const cors = require('cors');
const logger = require('morgan');

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});