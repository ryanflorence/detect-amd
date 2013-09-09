var fs = require('fs');
var detectDefine = require('./lib/detect-define');

module.exports = detectDefine;

detectDefine.fromFile = function(file) {
  var code = fs.readFileSync(file).toString();
  return detectDefine(code);
};

