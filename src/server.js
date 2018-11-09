/*jshint esversion: 6 */

// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// var mongo = require('mongoose');
// var http = require('http');

// var db = mongo.connect('', function (err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('conntect to' + db + ' + ', response);
//   }
// });

// var app = express();
// app.use(bodyParser());
// app.use(bodyParser.json({
//   limit: '5mb'
// }));
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'GET , POST , PUT , DELETE , PATCH');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// var Schema = mongo.Schema;

// var usersSchema = new Schema({
//   name: {
//     type: string
//   },
//   address: {
//     type: string
//   },
// }, {
//   versionKey: false
// });

// var model = mongo.model('users', usersSchema, 'users');

// app.post('api/SaveUser', function(req , res) {
//   var mod = new model(req.body);
//   if (req.body.mode == 'Save') {
//     mod.save(function (err , data){
//       if (err) {
//         res.send(err);
//       }
//       else {
//         res.send({data: 'Record has been updated'});
//       }
//     });
//   }
//   else {
//     model.findByIdAndUpdate(req.body.id, {name: req.body.name, address: req.body.address},
//       function(err, data){
//         if (err){
//           res.send(err);
//         }
//         else {
//           res.send({data: 'Record has been updated'});
//         }
//       });
//   }
// });

// app.post('/api/deleteUser', function(req , res){
//   model.remove({ _id:req.body.id}, function (err) {
//     if (err){
//       res.send(err);
//     }
//     else {
//       res.send({data: 'Record has been deleted'});
//     }
//   });
// });

// app.get('/api/getUser', function (req, res) {
//   model.find({}, function (err , data){
//     if (err) {
//       res.send(err);
//     }
//     else {
//       res.send(data);
//     }
//   });
// });

// app.listen(5500, function () {
//   console.log('app listening on port 5500');
// });



// another test 2
// get our api routes
// const api = require('./src/server/routes/api');

// var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'dist')));

// app.use('/api', api);

// app.get('*', (req , res) => {
//   res.sendFile(path.join(__dirname , 'dist/AG-Signup/index.html'));
// });

// const port = process.env.PORT || 3000;
// app.set('port', port);

// const server = http.createServer(app);
// server.listen(port , () => console.log(`API running on localhost: ${port}`));

//another test 3

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');

// get our api routes
const api = require('./src/api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req , res) => {
  res.sendFile(path.join(__dirname , 'dist/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port , () => console.log(`API running on localhost: ${port}`));
