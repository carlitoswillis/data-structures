var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;
  someInstance.counter = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};



var queueMethods = {

  enqueue: function (value) {
    this.storage[this.counter] = value;
    this.counter++;
    this.length++;
  },

  dequeue: function () {
    var dequeued;
    var count = 0;
    for (var key in this.storage) {
      if (count === 0) {
        dequeued = this.storage[key];
        delete this.storage[key];
      }
      count++;
      if (this.length > 0) {
        this.length--;
      }
      return dequeued;
    }


  },

  size: function () {
    return this.length;
  }
};

