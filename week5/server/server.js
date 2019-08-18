/* eslint-disable no-console */
const express = require('express'); // used for routing
const app = express(); //init express
const http = require('http').Server(app); //used to provide http functionality
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Server listening on ${host} port: ${port}`);
});

app.post('/auth', require(__dirname + '/api/auth'));
