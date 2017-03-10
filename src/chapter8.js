var exports = module.exports = {};
// === CHAPTER 8 === //

// 8.1 - Triple Step
exports.tripleStep = (n) => {
  let result = 0;
  const innerFunction = (curStep) => {
    for (let i = 1; i < 4; i++) {
      if ((curStep + i) === n) {
        result++;
      } else if ((curStep + i) < n) {
        innerFunction(curStep + i);
      }
    }
  };
  innerFunction(0);
  return result;
};

// 8.2 - Robot in a Grid
// first designing an algro w/o limited paths
exports.robotInAGridNoLimit = (r, c) => {
  const results = [];
  const innerFunction = (path) => {
    if (path[0] === r && path[1] === c) {
      results.push(path[2]);
    }
    if (path[0] < r) {
      const temp = Array.from(path[2]);
      temp.push('r');
      innerFunction([path[0] + 1, path[1], temp]);
    }
    if (path[1] < c) {
      const temp = Array.from(path[2]);
      temp.push('d');
      innerFunction([path[0], path[1] + 1, temp]);
    }
  };
  const start = [0, 0, []];
  innerFunction(start);
  return results;
};

// 8.3 - Magic Index
exports.magicIndex = (array, length) => {
  if (length === undefined) {
    length = 0;
  }
  const midpoint = Math.floor(array.length / 2);
  const arrayMidpoint = length + midpoint;
  if (arrayMidpoint === array[midpoint]) {
    return array[midpoint];
  } else if (array[midpoint] > arrayMidpoint) {
    const lowerArr = array.slice(0, midpoint);
    return exports.magicIndex(lowerArr, 0);
  } else if (array[midpoint] < arrayMidpoint) {
    const higherArr = array.slice(midpoint);
    return exports.magicIndex(higherArr, midpoint);
  }
  return - 1;
};

// 8.4 - Power Set

// 8.5 - Recursive Multiply
exports.recursiveMultiply = (int1, int2) => {
  if (int2 !== 0) {
    return exports.recursiveMultiply(int1 + int2, int2 - 1);
  } else {
    return int1;
  }
};

// 8.6 - Towers of Hanoi

// 8.7 - Permutations without Dups

// 8.8 - Permutations with Dups

// 8.9 - Parens

// 8.10 - Paint Fill

// 8.11 - Coins

// 8.12 - Eight Queens

// 8.13 - Stack of Boxes

// 8.14 - Boolean Evaluation
