var moongoose = require('mongoose');
var Schema = moongoose.Schema;

try {
moongoose.connect('mongodb://127.0.0.1/gridFS', {useNewUrlParser: true});
var connection = moongoose.connection;
var path = require('path');

var Grid = require('gridfs-stream');
var fs = require('fs');

var videoPath = path.join(__dirname, '../src/assets/23.mp4');

Grid.mongo = moongoose.mongo;

connection.once('open', function () {
  console.log('_ connection open _');
  var gfs = Grid(connection.db);

  var writeStream = gfs.createWriteStream({
    filename: '23.mp4'
  });


  fs.createReadStream(videoPath).pipe(writeStream);
  writeStream.on('close', function (file) {
    console.log(file.filename + 'Written to DB');
  });
});
}
catch(e ) {console.log(e); }
