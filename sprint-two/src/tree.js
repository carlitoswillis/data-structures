var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};
// .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    return true;
  }
  _.each(this.children, function(child) {
    result = result || child.contains(target);
  });

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
