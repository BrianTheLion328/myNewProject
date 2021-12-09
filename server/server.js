const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')

require('./config/mongoose.config');
// we import our mongoose config file so it will fire up the
// MongoDB server connection and our new person.routes file so
// we can handle a post request to create a person. But first we
// need to add a few app.use() statements with express middleware

app.use(cors());
// cors allows the ability to make cross-origin requests
// for example: being on localhost:3000 but making a
// request to localhost:8000.

app.use(express.json())
app.use(express.urlencoded( { extended: true} ) );

require('./routes/person.routes')(app);
// here we are pulling in the code from the person.routes.js file and
// adding app in as the argument. app being express() on line 2 above.

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) )
