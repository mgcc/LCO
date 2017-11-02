const express = require('express');
const app = express();

app.use('/images', express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3001, (err) => {
  if (!err) { console.log('Server 2 started on http://localhost:3001'); }
});