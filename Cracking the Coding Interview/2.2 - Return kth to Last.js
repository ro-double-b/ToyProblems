const kThToLast = (linkedList, k) => {
  const reverseValueArr = [];
  let node = linkedList;
  while (node.next != null) {
    reverseValueArr.unshift(node.value);
    node = node.next;
  }
  return reverseValueArr[k];
};
