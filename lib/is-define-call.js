module.exports = function(node) {
  return node.type === 'CallExpression' &&
         node.callee.type === 'Identifier' &&
         node.callee.name === 'define';
};

