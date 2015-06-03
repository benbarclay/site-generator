var AWS = require('aws-sdk');
var glob = require('glob');
var fs = require('fs');
var mime = require('mime');

AWS.config.update({region: 'ap-southeast-2'});

var S3 = new AWS.S3({apiVersion: '2006-03-01'});

console.log('Beginning deploy');

glob('./build/**/*.*', function (err, files) {
  if (err) {
    return console.error(err);
  }
  console.log(files);
  files.forEach(function (element, index, array) {
    var file = element.substr(8);
    console.log('Uploading: ' + file);
    S3.putObject({
      Bucket: 'benbarclay.co',
      Key: file,
      Body: fs.readFileSync(element),
      Metadata: {
        Content-Type: mime.lookup(element);
      }
    }, function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log(data);
      console.log('Completed: ' + file);
    });
  });
});
