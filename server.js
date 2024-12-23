const http = require('http');
// App.js

// Importing modules
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {

  // Sending our index.html file as 
  // response. In path.join() method
  // __dirname is the directory where
  // our app.js file is present. In 
  // this case __dirname is the root
  // folder of the project.
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/example', (req, res) => {
  res.sendFile(path.join(__dirname, '/example.html'));
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});