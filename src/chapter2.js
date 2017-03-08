var exports = module.exports = {};
// === CHAPTER 2 === //

// 2.1 - Remove Dups
exports.removeDups = (linkedList) => {
  const list = {};
  let node = linkedList;
  while (node != null) {
    if (list[node.value] === undefined) {
      list[node.value] = 1;
    } else {
      node.next = node.next.next;
    }
    node = node.next;
  }
};

// 2.2 - Return Kth to Last
exports.kThToLast = (linkedList, k) => {
  const reverseValueArr = [];
  let node = linkedList;
  while (node.next != null) {
    reverseValueArr.unshift(node.value);
    node = node.next;
  }
  return reverseValueArr[k];
};

// 2.3 - Delete Middle Node
exports.deleteMiddleNode = (deleteNode) => {
  deleteNode.value = deleteNode.next.value;
  deleteNode.next = deleteNode.next.next;
};

// 2.4 - Partition
exports.partition = (linkedList, partitionNum) => {
  const orderdArr = [];
  let node = linkedList;
  while (node.next != null) {
    if (node.value >= partitionNum) {
      orderdArr.push(node.value);
    } else {
      orderdArr.unshift(node.value);
    }
    node = node.next;
  }
  node = linkedList;
  for (let i = 0; i < orderdArr.length; i++) {
    node.value = orderdArr[i];
    node = node.next;
  }
  return linkedList;
};

// 2.5 - Sum Lists
exports.SumLists = (linkedListOne, LinkedListTwo) => {
  let carryOver = 0;
  let nodeOne = linkedListOne;
  let nodeTwo = LinkedListTwo;
  const result = {};
  let resultValue = result;
  while (nodeOne.next != null && nodeTwo.next != null) {
    if ((nodeOne.value + nodeTwo.value + carryOver) < 10) {
      resultValue.value = nodeOne.value + nodeTwo.value + carryOver;
      carryOver = 0;
    } else {
      resultValue.value = 10 - nodeOne.value + nodeTwo.value + carryOver;
      carryOver = 1;
    }
    nodeOne = nodeOne.next;
    nodeTwo = nodeTwo.next;
    resultValue =resultValue.next;
  }
  return result;
};

// 2.6 - Palindrome

// 2.7 - Intersection

// 2.8 - Loop Detection

