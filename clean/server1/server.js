const express = require('express');
const app = express();

app.use('/images', express.static('images'));
app.use('/styles', express.static('styles'));

app.listen(3001, (err) => {
  if (!err) { console.log('Server 1 started on http://localhost:3001'); }
});