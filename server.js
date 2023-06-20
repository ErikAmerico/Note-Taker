const express = require('express');
const apiRoutes = require('./Develop/routes/apiRoutes.js')
const htmlRoutes = require('./Develop/routes/htmlRoutes.js');
const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));
app.use(apiRoutes)
app.use(htmlRoutes);

// GET * route (default route)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
