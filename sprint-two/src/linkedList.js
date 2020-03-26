var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;


  // addToTail() method, takes a value and adds it to the end of the list
  list.addToTail = function (value) {

    var newNode = Node(value);


    // check if head is null
    // check if tail is null

    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    list.size++;
  };
  // .removeHead() method, removes the first node from the list and returns its value
  list.removeHead = function () {
    if (list.head === null) {
      return undefined;
    }
    var value = list.head.value;
    var second = list.head.next;
    list.head = second;
    return value;
  };

  list.contains = function (target) {
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  // node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
