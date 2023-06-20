const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const db = '../develop/db/db.json';


  // GET /api/notes route
router.get('/api/notes', (req, res) => {
  fs.readFile(db, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    }
    res.json(JSON.parse(data));
  });
});

  // POST /api/notes route
router.post('/api/notes', (req, res) => {
  
  const { title, text } = req.body; 
  console.log(req.body);

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4()
    };
    // const newNote = req.body;
    // newNote.id = uuidv4();

    fs.readFile(db, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        let parsedData = JSON.parse(data);
        if (!Array.isArray(parsedData)) {
          parsedData = [];
    }
        parsedData.push(newNote);
        fs.writeFile(db, JSON.stringify(parsedData, null, 4), (err) =>
          err ? console.error(err) : console.info(`\nData written to ${db}`)
        );
      }
      
    })

      const response = {
      status: 'success',
      body: newNote,
    };

    res.status(200).send(response);
  } else {
    res.status(400).send('Error in adding note');
  }

});




module.exports = router;
