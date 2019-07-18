const express = require('express'); //used for routing
const app = express();
const http = require('http').Server(app); //used to provide http functionality
const path = require('path');
const bodyParser = require('body-parser');

//allows public files to be hosted in www subdirectory
app.use(express.static(__dirname + '/www')); 
app.use(bodyParser.json());

require(__dirname + '/routes/login.js')(app, path);
require(__dirname + '/routes/account.js')(app, path);
require(__dirname + '/api/login_attempt.js')(app)

//starting server with log info
let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Server listening on ${host} port: ${port}`);
});
