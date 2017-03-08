const SumLists = (linkedListOne, LinkedListTwo) => {
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
