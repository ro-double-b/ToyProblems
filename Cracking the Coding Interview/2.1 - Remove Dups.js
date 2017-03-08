const removeDups = (linkedList) => {
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
