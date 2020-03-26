var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  list.addToTail = function (value) {

    var newNode = Node(value);

    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      newNode.prev = list.tail;
      list.tail = newNode;
    }
    list.size++;
  };

  list.removeHead = function () {
    if (list.head === null) {
      return undefined;
    }

    if (list.size > 0 ) {
      list.size--;
    }

    var value = list.head.value;
    if (list.size > 1) {
      list.head.next.prev = null;
    }
    list.head = list.head.next;
    return value;
  };

  list.contains = function (target) {

    var find = function (currnode, val) {
      if (currnode === null) {
        return false;
      }
      return (currnode.value === val) || find(currnode.next, val);
    };

    return find(list.head, target);

  //old code:
    // var result = false;
    // var currNode = list.head;
    // for (var i = 0; i < list.size; i++) {
    //   if (currNode.value === target) {
    //     return true;
    //   } else {
    //     currNode = currNode.next;
    //   }
    // }
    // return result;
  };
  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
