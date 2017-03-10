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

exports.Graph = () => {
  const obj = {};
  obj.values = [];
  obj.edges = [];

  obj.addNode = (node) => {
    obj.values.push(node);
  };

  obj.contains = (node) => {
    return obj.values.indexOf(node) >= 0;
  };

  obj.removeNode = (node) => {
    const index = obj.values.indexOf(node);
    obj.values.slice(0, index).concat(obj.values.slice(index + 1, obj.values.length));
  };

  obj.hasEdge = (fromNode, toNode) => {
    let result = false;
    obj.edges.forEach((pair) => {
      if (pair.indexOf(fromNode) >=0 && pair.indexOf(toNode) >= 0) {
        result = true;
      }
    });
    return result;
  };

  obj.addEdge = (fromNode, toNode) => {
    obj.edges.push([fromNode, toNode]);
  };

  obj.removeEdge = (fromNode, toNode) => {
    let idx;
    obj.edges.forEach((pair, index) => {
      if (pair.indexOf(fromNode) >= 0 && pair.index(toNode >= 0)) {
        idx = index;
      }
    });
    obj.edges = obj.edges.slice(0, idx).concat(obj.edges.slice(idx + 1, obj.edges.length));
  };

  // obj.forEachNode = (cb) => {
  //   return obj.values.map(cb)
  // }

  return obj;
};

