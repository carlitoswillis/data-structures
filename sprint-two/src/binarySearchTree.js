var BinarySearchTree = function(value) {

  var tree = Object.create(BinarySearchTreeMethods);

  tree.value = value;
  tree.left;
  tree.right;
  tree.arr = [value];
  tree.size = 0;


  return tree;


};

var BinarySearchTreeMethods = {};



BinarySearchTreeMethods.insert = function (value) {

  this.size++;
  this.arr.push(value);
  var insertHelper = function (tree, val) {
    if (val > tree.value) {

      if (tree.right === undefined) {
        tree.right = BinarySearchTree(val);
      } else {
        insertHelper(tree.right, val);
      }
    } else {
      if (tree.left === undefined) {
        tree.left = BinarySearchTree(val);
      } else {
        insertHelper(tree.left, val);
      }
    }
  };

  insertHelper(this, value);
};

BinarySearchTreeMethods.contains = function (value) {

  if (this.value === value) {
    return true;
  }
  if (this.right === undefined && this.left === undefined) {
    return false;
  }

  if (this.right && this.left) {
    return this.left.contains(value) || this.right.contains(value);
  }


  if (this.right) {
    return this.right.contains(value);
  }

  if (this.left) {
    return this.left.contains(value);
  }

};

BinarySearchTreeMethods.depthFirstLog = function (callback) {

  // this.arr.forEach(function(x) {
  //   callback(x);
  // });

  var depthHelper = function (tree) {
    callback(tree.value);

    if (tree.left === undefined) {
    } else {
      depthHelper(tree.left);
    }

    if (tree.right === undefined) {
    } else {
      depthHelper(tree.right);
    }
  };

  depthHelper(this);


};




//  A .left property, a binary search tree (BST) where all values are lower than the current value.
//  A .right property, a BST where all values are higher than the current value.
//  A .insert() method, which accepts a value and places it in the tree in the correct position.
//  A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
//  A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.


/*
 * Complexity: What is the time complexity of the above functions?
 */
