var Nodehun = require('nodehun');
var spellcheck = require('nodehun-sentences');
var fs = require('fs');
var glob = require('glob');
var markdown = require('markdown').markdown;
var toMarkdown = require('to-markdown').toMarkdown;

var affEN = fs.readFileSync('tests/dict-en/en_AU.aff');
var dictEN = fs.readFileSync('tests/dict-en/en_AU.dic');
var dictCUSTOM = fs.readFileSync('tests/dict-en/en_CUSTOM.dic');

function filterJSONML (json, tag) {
  var filter = function (node) {
    node.forEach(function (el, i, arr) {
      if (el instanceof Array) {
        arr[i] = el.filter(function (testEl) {
          return testEl[0] !== tag;
        });
        filter(arr[i]);
      }
    });
    return node;
  };

  return filter(json);
}

var dict = new Nodehun(affEN, dictEN);
dict.addDictionary(dictCUSTOM, function (addDictErr) {
  if (addDictErr) {
    throw addDictErr;
  }

  glob('src/posts/met*.md', function (globErr, files) {
    if (globErr) {
      throw globErr;
    }

    files.forEach(function (file) {
      fs.readFile(file, function (fsErr, contents) {
        if (fsErr) {
          throw fsErr;
        }

        var JSONML = markdown.parse(contents.toString('utf8'));
        var parsed = filterJSONML(JSONML, 'inlinecode');
        parsed = filterJSONML(JSONML, 'link');
        var parsedContents = toMarkdown(markdown.toHTML(parsed));
        parsedContents = parsedContents.replace('&#39;', "'");

        spellcheck(dict, parsedContents, function (scErr, typos) {
          if (scErr) {
            throw scErr;
          }

          if (typos.length !== 0) {
            typos.forEach(function (typo) {
              console.log(typo);
              throw new Error(typo);
            });
          }
        });
      });
    });
  });
});
