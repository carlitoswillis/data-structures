var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.length = 0;
  someInstance.counter = 0;
  someInstance.storage = {};
  return someInstance;
};

Queue.prototype.constructor = Queue;

var queueMethods = {

  enqueue: function (value) {
    this.storage[this.counter] = value;
    this.length++;
    this.counter++;
  },

  dequeue: function (value) {
    var count = 0;
    var dequeued;
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
    return dequeued;
  },

  size: function (value) {
    return this.length;
  }
};