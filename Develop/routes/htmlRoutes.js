// const express = require('express');
const router = require('express').Router();
const path = require('path');

// const app = express();

  // GET /notes route
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });


module.exports = router;