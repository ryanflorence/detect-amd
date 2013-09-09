module.exports = function(paths) {
  for (var i = 0; i < paths.length; i += 1) {
    if (paths[i].match(/^\./)) {
      return true;
    }
  }
  return false;
};

