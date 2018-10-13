/*jshint esversion: 6 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');

// get our api routes
const api = require('./src/server/routes/api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req , res) => {
  res.sendFile(path.join(__dirname , 'dist/AG-Signup/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port , () => console.log(`API running on localhost: ${port}`));
