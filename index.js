var fs = require('fs');
var esprima = require('esprima');
var detectDefine = require('./lib/detect-define');

module.exports = detect;

function detect(code) {
  return detectDefine(esprima.parse(code));
}

detect.fromAst = detectDefine;

detect.fromFile = function(file) {
  var code = fs.readFileSync(file).toString();
  return detect(code);
};

