const deleteMiddleNode = (deleteNode) => {
  deleteNode.value = deleteNode.next.value;
  deleteNode.next = deleteNode.next.next;
};
