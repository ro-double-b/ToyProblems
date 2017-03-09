var exports = module.exports = {};
const helper = require('./helper')
// === CHAPTER 3 === //

// 3.1 - Three in One

exports.threeInOne = () => {
  const storage = {};
  storage.stackStorage = [];
  const ArrStack = (numberInArr) => {
    const stack = {};
    let position = numberInArr;
    stack.push = (value) => {
      storage.stackStorage[position] = value;
      position = position + 3;
      // console.log('push position', position);
    };

    stack.pop = () => {
      // console.log('pop position', position);
      if (position >= 2) {
        const temp = storage.stackStorage[position - 3];
        delete storage.stackStorage[position - 3];
        position = position - 3;
        return temp;
      }
    };
    return stack;
  };

  storage.one = ArrStack(0);
  storage.two = ArrStack(1);
  storage.three = ArrStack(2);

  return storage;
};

// 3.2 - Stack Min

exports.stackMin = () => {
  const someInstance = {};
  const storage = { 0: 1 };
  const min = [];
  let key = 0;
  let lastValue;

  someInstance.push = (value) => {
    storage[key] = value;
    key++;
    lastValue = value;
    // this is the added code for min to work
    if (min[0] === undefined) {
      min[0] = value;
    } else if (min[0] <= value) {
      min.push(value);
    } else {
      min.unshift(value);
    }
  };

  someInstance.pop = () => {
    if (key > 0) {
      // this is the added code for min to work
      if (min[0] !== lastValue) {
        min.splice(key, 1);
      } else {
        min.splice(0, 1);
      }
      // end of added code
      delete storage[key];
      key--;
      lastValue = storage[key];
    }
    return lastValue;
  };

  someInstance.size = () => {
    return key;
  };

  someInstance.min = () => {
    return min[0];
  };

  return someInstance;
};

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

exports.MyQueue = () => {
  const obj = {};

  obj.stack1 = helper.Stack();
  obj.stack2 = helper.Stack();
  obj.counter = 0;

  obj.enqueue = (value) => {
    obj.stack1.push(value);
    obj.counter = obj.counter + 1;
  };

  obj.dequeue = () => {
    if (obj.counter <= 1) {
      obj.stack1.pop();
    } else {
      for (let i = 0; i < (obj.counter - 1); i++) {
        obj.stack2.push(obj.stack1.pop());
      }
      const temp = obj.stack1.pop();
      for (let i = 0; i < obj.counter; i++) {
        obj.stack1.push(obj.stack2.pop());
      }
      return temp;
    }
  };
  return obj;
};

// 3.5 - Sort Stack

// Implement a stack and a temporary stack
  // on push check the item at the top of the stack...
    // the item being pushed is less, just add it to the top of the stack,
    // otherwise keep poping the the stack and pushing it into the temp stack until it is less, then add that to the top
    // then pop all of the items off the temp stack and push them into the ordered stack.


// 3.6 - Animal Shelter

