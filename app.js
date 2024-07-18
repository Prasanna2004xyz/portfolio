const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index', { title: 'My Portfolio' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
