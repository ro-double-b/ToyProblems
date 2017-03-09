var exports = module.exports = {};

exports.LinkedList = () => {
  const Node = (value) => {
    const node = {};
    node.value = value;
    node.next = null;
    return node;
  };

  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = (value) => {
    const newTail = Node(value);
    if (!list.head) {
      list.head = newTail;
    }
    if (list.tail) {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = () => {
    if (list.head === null) {
      return null;
    }
    const currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;
  };

  list.contains = (target) => {
    let node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  return list;
};

exports.Stack = () => {
  const someInstance = {};
  const storage = { 0: 1 };
  let key = 0;
  let lastValue;

  someInstance.push = (value) => {
    storage[key] = value;
    key++;
    lastValue = value;
  };

  someInstance.pop = () => {
    if (key > 0) {
      delete storage[key];
      key--;
      lastValue = storage[key];
    }
    return lastValue;
  };

  someInstance.size = () => {
    return key;
  };

  return someInstance;
};


exports.Queue = () => {
  const someInstance = {};
  const storage = {};
  let key = 0;

  someInstance.enqueue = (value) => {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = () => {
    if (key > 0) {
      const temp = storage[0];
      delete storage[0];
      for (let i = 1; i <= key; i++) {
        storage[i - 1] = storage[i];
      }
      delete storage[key];
      key--;
      return temp;
    }
    return undefined;
  };

  someInstance.size = () => {
    return key;
  };

  return someInstance;
};

