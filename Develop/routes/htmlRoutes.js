const express = require('express');
const path = require('path');

const app = express();

  // GET /notes route
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // GET * route (default route)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

module.exports = app;