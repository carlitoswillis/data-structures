var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
  this.size++;
};

setPrototype.contains = function(item) {
  return this._storage[item] || false;
};

setPrototype.remove = function(item) {
  var result = this._storage[item];
  delete this._storage[item];
  this.size--;
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
