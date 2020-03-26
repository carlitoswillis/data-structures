var Queue = function () {
  var someInstance = {};
  var counter = 0;
  var length = 0;
  var lowerIndex = 0;
  // refactor with lowerindex

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {

    storage[counter] = value;
    counter++;
    length++;

  };

  someInstance.dequeue = function () {

    var dequeued;
    var cnt = 0;
    for (var value in storage) {
      if (cnt === 0) {
        dequeued = storage[value];
        delete storage[value];
      }
      cnt++;
    }

    if (length > 0) {
      length--;
      lowerIndex++;
    }
    return dequeued;
  };

  someInstance.size = function () {
    return length;
  };

  return someInstance;
};

