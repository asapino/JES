const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Perform actions with the form data (e.g., send an email, store in a database)
  // For simplicity, we'll just log the data in this example.
  console.log(`Received a contact form submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);
  res.redirect('/contact.html'); // Redirect to the contact page
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
