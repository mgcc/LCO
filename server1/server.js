const express = require('express');
const app = express();

app.use('/images', express.static('images'));
app.use('/styles', express.static('styles'));

// for CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/get-subjects-data', (req, res) => {
  res.send([
    { code: "CMSC100", description: "Web Programming" },
    { code: "CMSC2", description: "Introduction to the Internet" },
    { code: "CMSC22", description: "Object-Oriented Programming" }
  ]);
});

app.listen(3000, (err) => {
  if (!err) { console.log('Server 1 started on http://localhost:3000'); }
});