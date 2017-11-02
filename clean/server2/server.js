const express = require('express');
const app = express();



app.listen(3002, (err) => {
  if (!err) { console.log('Server 2 started on http://localhost:3002'); }
});