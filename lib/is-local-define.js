// might be too naive here
module.exports = function(node) {
  return ( // function define() {}
           node.type === 'FunctionDeclaration' &&
           node.id.name === 'define'
         )

         ||

         ( // define = function() {}
           node.type === 'AssignmentExpression' &&
           node.left.name === 'define' &&
           node.right.type === 'FunctionExpression'
         );
};

