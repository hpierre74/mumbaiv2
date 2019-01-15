const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(express.json());

module.exports = app;
