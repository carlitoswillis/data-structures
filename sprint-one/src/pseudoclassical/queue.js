var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.keyGen = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.keyGen] = value;
  this.keyGen++;
  this.length++;
};

Queue.prototype.dequeue = function () {

  var dequeued;
  var count = 0;
  for (var key in this.storage) {
    if (count === 0) {
      dequeued = this.storage[key];
      delete this.storage[key];
    }
    count++;
  }
  if (this.length > 0) {
    this.length--;
  }
  return dequeued
};

Queue.prototype.size = function () {
  return this.length;
};




