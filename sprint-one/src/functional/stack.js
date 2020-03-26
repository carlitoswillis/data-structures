var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.counter = 0;
  someInstance.length = 0;
  someInstance.storage = storage;



  // Implement the methods below
  someInstance.push = function (value) {
    someInstance.storage[someInstance.counter] = value;
    someInstance.length++;
    someInstance.counter++;
  };

  someInstance.pop = function () {
    var count = 0;
    var popped;
    for (var value in someInstance.storage) {
      if (count === someInstance.length - 1) {
        popped = someInstance.storage[value];
        delete someInstance.storage[value];
      }
      count++;
    }

    if (someInstance.length > 0) {
      someInstance.length--;
    }
    return popped;
  };

  someInstance.size = function () {
    return someInstance.length;
  };

  return someInstance;
};
