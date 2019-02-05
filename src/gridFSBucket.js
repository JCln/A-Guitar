/*jshint esversion: 6 */

const assert = require('assert');
const fs = require('fs');
const mongodb = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'test';

mongodb.MongoClient.connect(uri, { useNewUrlParser: true }, function(error, client) {
  assert.ifError(error);

  const db = client.db(dbName);

  var bucket = new mongodb.GridFSBucket(db);
  // ./assets/23.mp4'
  fs.createReadStream('./src/assets/23.mp4').
    pipe(bucket.openUploadStream('23.mp4')).
    on('error', function(error) {
      assert.ifError(error);
    }).
    on('finish', function() {
      console.log('done!');
      process.exit(0);
    });
});
