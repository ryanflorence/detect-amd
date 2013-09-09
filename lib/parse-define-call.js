var hasRelativePaths = require('./has-relative-paths');

module.exports = function(node) {
  var def = {
    deps: [],
    id: null,
    hasRelativeDeps: false
  };
  var args = node.arguments;
  if (args[0].type === 'Literal') {
    def.id = args[0].value;
  }
  if (args[0].type === 'ArrayExpression') {
    def.deps = mapElements(args[0].elements);
  }
  if (args[1] && args[1].type === 'ArrayExpression') {
    def.deps = mapElements(args[1].elements);
  }
  def.hasRelativeDeps = def.deps.length ? hasRelativePaths(def.deps) : false;
  return def;
}

function mapElements(elements) {
  return elements.map(function(element) {
    return element.value;
  });
}

