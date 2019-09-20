const express = require('express');  // Import exprerss.js
const app = express(); //The app object conventionally denotes the Express application. Create it by 
const http = require('http').Server(app);
const bodyParser = require('body-parser'); //create an instance of body-parser
const cors = require('cors'); //allow Cross site origin requests

app.use(cors());
app.use (bodyParser.json()); //Mounts the specified middleware function

require('./routes/api-add.js')(app);
require('./routes/api-prodcount.js')(app);
require('./routes/api-validid.js')(app);
require('./routes/api-getlist.js')(app);
require('./routes/api-getitem.js')(app);
require('./routes/api-update.js')(app);
require('./routes/api-deleteitem.js')(app);
    
//Start the server listening on port 3000. Outputs message to console once server has started.(diagnostic only)
require('./listen.js')(http);

module.exports = app;