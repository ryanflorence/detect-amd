module.exports = function traverse(node, fn) {
  var key, branch;
  fn(node);
  for (key in node) {
    branch = node[key];
    if ('object' === typeof branch && branch != null) {
      if (Array.isArray(branch)) {
        branch.forEach(function(node) {
          traverse(node, fn);
        });
      } else {
        traverse(branch, fn);
      }
    }
  }
};

