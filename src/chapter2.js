var exports = module.exports = {};
const helper = require('./helper')
// === CHAPTER 2 === //

// 2.1 - Remove Dups
exports.removeDups = (linkedList) => {
  const list = {};
  const node = linkedList.head;
  // add head of linkedList to the list tracker
  list[node.value] = 1;
  const helper = (currentNode) => {
    if (currentNode.next === null) {
      linkedList.tail = currentNode;
    } else if (list[currentNode.next.value] !== 1) {
      list[currentNode.next.value] = 1;
      helper(currentNode.next);
    } else if (currentNode.next.next === null) {
      linkedList.tail = currentNode;
    } else {
      currentNode.next = currentNode.next.next;
      helper(currentNode.next);
    }
  };
  helper(node);
};

// 2.2 - Return Kth to Last
exports.kThToLast = (linkedList, k) => {
  const reverseValueArr = [];
  let node = linkedList.head;
  while (node != null) {
    reverseValueArr.unshift(node.value);
    node = node.next;
  }
  return reverseValueArr[k - 1];
};

// 2.3 - Delete Middle Node
exports.deleteMiddleNode = (deleteNode) => {
  deleteNode.value = deleteNode.next.value;
  deleteNode.next = deleteNode.next.next;
};

// 2.4 - Partition
exports.partition = (linkedList, partitionNum) => {
  const orderdArr = [];
  let node = linkedList.head;
  while (node != null) {
    if (node.value >= partitionNum) {
      orderdArr.push(node.value);
    } else {
      orderdArr.unshift(node.value);
    }
    node = node.next;
  }
  node = linkedList.head;
  for (let i = 0; i < orderdArr.length; i++) {
    node.value = orderdArr[i];
    node = node.next;
  }
  return linkedList;
};

// 2.5 - Sum Lists
// currently this only takes in two linked lists that are equal in size
// will update if there are more
exports.sumLists = (linkedListOne, linkedListTwo) => {
  const result = helper.LinkedList();
  let counter = 0
  const greaterThanTen = (number) => {
    if (number > 10) {
      counter = 1;
      return number - 10;
    } else {
      counter = 0;
      return number;
    }
  };
  const innerFunction = (nodeOne, nodeTwo) => {
    if (nodeOne !== null && nodeTwo !== null) {
      // both nodes still have numbers
      let temp = nodeOne.value + nodeTwo.value + counter;
      temp = greaterThanTen(temp);
      result.addToTail(temp);
      innerFunction(nodeOne.next, nodeTwo.next);
    } else if (nodeOne !== null) {
      // nodeOne is longer than nodeTwo
      let temp = nodeOne.value + counter;
      temp = greaterThanTen(temp);
      result.addToTail(temp);
      innerFunction(nodeOne.next, nodeTwo);
    } else if (nodeTwo !== null) {
      // nodeTwo is longer than nodeOne
      let temp = nodeTwo.value + counter;
      temp = greaterThanTen(temp);
      result.addToTail(temp);
      innerFunction(nodeOne, nodeTwo.next);
    } else if (nodeOne === null && nodeTwo ==null) {
      // check to see if you need to add an additional counter
      if (counter === 1) {
        result.addToTail(1);
      }
    }
  };
  innerFunction(linkedListOne.head, linkedListTwo.head);
  return result;
  //   result.addToTail(nodeOne.value);
  //   nodeOne = nodeOne.next;
  // }

  // let resultNode = result.head;
  // while (nodeTwo != null) {
  //   if (resultNode.next === null) {
  //     result.addToTail(0);
  //   }
  //   if (resultNode.value + nodeTwo.value < 10) {
  //     resultNode.value = resultNode.value + nodeTwo.value;
  //     resultNode = resultNode.next;
  //     nodeTwo = nodeTwo.next;
  //   } else {
  //     resultNode.value = 10 - resultNode.value + nodeTwo.value;
  //     resultNode.next.value = resultNode.next.value + 1;
  //     resultNode = resultNode.next;
  //     nodeTwo = nodeTwo.next;
  //   }
  // }

  // // let resultValue = result;
  // // while (nodeOne != null || nodeTwo != null) {
  // //   if ((nodeOne.value + nodeTwo.value + carryOver) < 10) {
  // //     resultValue.value = nodeOne.value + nodeTwo.value + carryOver;
  // //     carryOver = 0;
  // //   } else {
  // //     resultValue.value = 10 - nodeOne.value + nodeTwo.value + carryOver;
  // //     carryOver = 1;
  // //   }
  // //   nodeOne = nodeOne.next;
  // //   nodeTwo = nodeTwo.next;
  // //   resultValue =resultValue.next;
  // // }
  // console.log(result.head.value)
  // return result;
};

// 2.6 - Palindrome

// 2.7 - Intersection

// 2.8 - Loop Detection

