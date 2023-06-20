const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js')
const htmlRoutes = require('./routes/htmlRoutes.js');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(apiRoutes)
app.use(htmlRoutes);

// GET * route (default route)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
