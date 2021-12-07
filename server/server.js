const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')

app.use(cors());
// cors allows the ability to make cross-origin requests
// for example: being on localhost:3000 but making a
// request to localhost:8000. 

require('./routes/person.routes')(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) )
