/*eslint-env node*/
'use strict';

var metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var ignore = require('metalsmith-ignore');
var assets = require('metalsmith-assets');

metalsmith(__dirname)
  .clean(false)
  .destination('../benbarclay.github.com')
  .use(ignore('.DS_Store'))
  .use(collections({
    'posts': {
      'pattern': 'posts/*.md',
      'sortBy': 'date',
      'reverse': true
    }
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':title'
  }))
  .use(templates({
    engine: 'mustache',
    default: 'post.mustache',
    partials: {
      header: 'header',
      footer: 'footer'
    }
  }))
  .use(assets({
    source: './assets',
    destination: './assets'
  }))
  .build(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Site Built');
    }
  });
