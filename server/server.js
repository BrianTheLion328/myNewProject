const express = require('express');
const app = express();
const PORT = 8000;

require('./routes/person.routes')(app); 

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) )
