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

