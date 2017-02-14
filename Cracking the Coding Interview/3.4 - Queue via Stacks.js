const queueViaStacks = () => {

};
// when an item is enqued, it will be pushed into the stack #1
// when an item is dequed...
  // every item in stack #1 will be poped
  // then pushed in to Stack #2
  // once complete the first item in Stack #1 will be at the end of Stack #2 and can be pushed off and saved
  // then each item in Stack #2 will be poped off and pushed into Stack #1
  // then the item that was saved could be returned as the item that is dequed...aka the first item to be added to the queue
  