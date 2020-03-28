

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
  this._keys = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._size++;
  this._storage.set(index, v);
  this._keys.push(k);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.contains = function(k) {
  return this._keys.includes(k);
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  this._storage.set(index, undefined);
  this._keys.splice(this._keys.indexOf(k), 1);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


