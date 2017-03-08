// === CHAPTER 1 === //

// 1.1 - Is Unique

// 1.2 - Check Permutation

// 1.3 - URLify

// 1.4 - Palindrome Permutation

// 1.5 - One Away

// 1.6 - String Compression

// 1.7 - Rotate Matriz

// 1.8 - Zero Matrix

// 1.9 - String Rotation

const LinkedList = () => {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = (value) => {
    if (list.head === null) {
      list.head = Node(value);
    }
    if (list.tail !== null) {
      list.head.next = Node(value);
    }
    list.tail = Node(value);
  };

  list.removeHead = () => {
    const temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = (target, node = list.head) => {
    if (node.value === target) {
      return true;
    }
    if (node.next === null) {
      return false;
    }
    return list.contains(target, node.next);
  };

  return list;
};

const Node = (value) => {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};
