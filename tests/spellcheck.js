var Nodehun = require('nodehun');
var spellcheck = require('nodehun-sentences');
var fs = require('fs');
var glob = require('glob');

var affbuff = fs.readFileSync('tests/dict-en/en_AU.aff');
var dictbuff = fs.readFileSync('tests/dict-en/en_AU.dic');
var dict = new Nodehun(affbuff, dictbuff);

glob('src/posts/*.md', function (globErr, files) {
  if (globErr) {
    throw globErr;
  }

  files.forEach(function (file) {
    fs.readFile(file, function (fsErr, contents) {
      if (fsErr) {
        throw fsErr;
      }

      spellcheck(dict, contents.toString('utf8'), function (scErr, typos) {
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
