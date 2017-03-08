const partition = (linkedList, partitionNum) => {
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
