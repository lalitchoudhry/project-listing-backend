// packeges
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('./config/database');

app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res)=>{
    res.send("server is On");
})

module.exports = app;