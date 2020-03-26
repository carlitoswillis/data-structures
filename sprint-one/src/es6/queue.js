class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.storage = {};
    this.length = 0;
    this.keyGen = 0;

  }

  // isTallEnough(treeHeight) {
  //   return this.height > treeHeight;
  // }

  // isHungry() {
  //   return this.hunger > 0;
  // }

  enqueue(value) {
    this.storage[this.keyGen] = value;
    this.length++;
    this.keyGen++;
  }

  dequeue(value) {
    var dequeued;
    var count = 0;
    for (var key in this.storage) {
      if (count === 0) {
        dequeued = this.storage[key];
        delete this.storage[key];
        this.length--;
      }
      count++;
    }
    return dequeued;
  }

  size() {
    return this.length;
  }

}
