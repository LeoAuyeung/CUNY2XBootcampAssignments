const express = require('express');
const app = express();

const client = require('./client');

app.use('/api', require('./routes/router'));


const PORT = 3000;
app.listen(PORT, () => console.log('listening on ' + PORT));