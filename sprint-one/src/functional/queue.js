var Queue = function () {
  var someInstance = {};
  someInstance.counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;

  // Implement the methods below

  someInstance.enqueue = function (value) {

    someInstance.storage[someInstance.counter] = value;
    someInstance.counter++;

  };

  someInstance.dequeue = function () {
    var key = Object.keys(storage)[0];
    var dequeued = storage[key];
    delete storage[key];
    return dequeued;
  };

  someInstance.size = function () {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};

