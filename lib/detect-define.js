var traverse = require('./traverse');
var isDefineCall = require('./is-define-call');
var isLocalDefine = require('./is-local-define');
var parseDefineCall = require('./parse-define-call');

module.exports = function (ast) {
  var found = false;
  var hasOwnDefine = false;
  traverse(ast, function(node) {
    // if only js had blocks...
    if (hasOwnDefine) return;
    hasOwnDefine = isLocalDefine(node);
    if (isDefineCall(node)) {
      // last define call wins, not sure what to do about multiple define calls
      // in a single file yet, should probably just tell the user "sister, I
      // don't know what to do about this file"
      found = parseDefineCall(node);
    }
  });
  return !hasOwnDefine && found;
};

