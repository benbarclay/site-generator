var AWS = require('aws-sdk');
var glob = require('glob');
var fs = require('fs');

var S3 = new AWS.S3({apiVersion: '2006-03-01'});

glob('build/**/*.*', function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function (element, index, array) {
    var file = element.substr(6);
    S3.putObject({
      Bucket: 'benbarclay.co',
      Key: file ,
      Body: fs.readFileSync(element)
    }, function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log(data);
    });
  });
});
