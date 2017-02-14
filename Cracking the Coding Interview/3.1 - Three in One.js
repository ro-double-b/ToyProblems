// each stack would alternate in the array...
// each stack would have a tracker to tell which index the last added item was at in the array
// ie each stack would start off at S#1 = 0, S#2 = 1, S#3 = 2
// each time an item was added to the stack i would increase it by 3...effectively showing where the next item can be added for that particular stack
// when one was removed...
  // i would decrease the counter by 3
  // save the item stored in that place
  // set that value to undefined in the array
  // return the item stored.
