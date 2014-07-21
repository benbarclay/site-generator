var Metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');

Metalsmith(__dirname)
  .clean(false)
  .destination('../benbarclay.github.com')
  .use(collections({
    "posts":  {
      "pattern": "posts/*.md",
      "sortBy": "date",
      "reverse": true
    }
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':title'
  }))
  .use(templates({
    engine: 'mustache',
    default: 'post.mustache'
  }))
  .use(index)
  .use(debug)
  .build();

function index(files, metalsmith, done) {
  files['index.html'] = files['index/index.html'];
  delete files['index/index.html'];

  if (files['index/.DS_Store']) {
    delete files['index/.DS_Store'];
  }

  done();
}

function debug(files, metalsmith, done) {
  //console.log(files);
  //console.log(metalsmith);
  //console.log(metalsmith.metadata());
  //Object.keys(files).forEach(function(file){
    //console.log(files[file]);
  //});
  done();
}
