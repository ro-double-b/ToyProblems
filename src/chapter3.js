// var exports = module.exports = {};
// === CHAPTER 3 === //

// 3.1 - Three in One

// each stack would alternate in the array...
// each stack would have a tracker to tell which index the last added item was at in the array
// ie each stack would start off at S#1 = 0, S#2 = 1, S#3 = 2
// each time an item was added to the stack i would increase it by 3...effectively showing where the next item can be added for that particular stack
// when one was removed...
  // i would decrease the counter by 3
  // save the item stored in that place
  // set that value to undefined in the array
  // return the item stored.


// 3.2 - Stack Min

// the stack would have to have a counter that unshifted the min number whenever a new min is less than or equal to is pushed
// whenever a number is popped off from the stack, it checks the current min...to see if that nubmer is the same
  // if it is then the min number is then removed and the next min number is next in line

// 3.3 - Stack of Plates

// would create an array of stacks
// there would be a counter to track the index of the last stack used
// also a counter to track the number in the current stack
// there would need to be a constant that is the max stack for all the stack
// when one is added it checks to see if the current stack is at its max
  // if it is it will increate the number of stack counter and create a new stack at the index
  // otherwise it will just increase the number of that particular stack counter

// pop will have similar removal function but going backwards will check to see the last stack used


// 3.4 - Queue via Stacks

// when an item is enqued, it will be pushed into the stack #1
// when an item is dequed...
  // every item in stack #1 will be poped
  // then pushed in to Stack #2
  // once complete the first item in Stack #1 will be at the end of Stack #2 and can be pushed off and saved
  // then each item in Stack #2 will be poped off and pushed into Stack #1
  // then the item that was saved could be returned as the item that is dequed...aka the first item to be added to the queue


// 3.5 - Sort Stack

// Implement a stack and a temporary stack
  // on push check the item at the top of the stack...
    // the item being pushed is less, just add it to the top of the stack,
    // otherwise keep poping the the stack and pushing it into the temp stack until it is less, then add that to the top
    // then pop all of the items off the temp stack and push them into the ordered stack.


// 3.6 - Animal Shelter
