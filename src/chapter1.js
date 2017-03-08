var exports = module.exports = {};
// === CHAPTER 1 === //

// 1.1 - Is Unique
exports.isUnique = (string) => {
  // double loop over string
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      // check if current letter is not in remainder of string
      if (i !== j && string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};

// 1.2 - Check Permutation
exports.checkPermutation = (stringOne, stringTwo) => {
  const resultObj = {};
  // check to make sure both strings are equal
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    // add stringOne's characters to resultObj
    for (let i = 0; i < stringOne.length; i++) {
      if (resultObj[stringOne[i]] === undefined) {
        resultObj[stringOne[i]] = 1;
      } else {
        resultObj[stringOne[i]]++;
      }
    }
    // subtract stringTwo's characters from resultObj
    for (let j = 0; j < stringTwo.length; j++) {
      if (resultObj[stringTwo[j]] === undefined) {
        resultObj[stringTwo[j]] = -1;
      } else {
        resultObj[stringTwo[j]]--;
      }
    }
    // check to make sure resultObj's keys are at zero
    const resultObjKeys = Object.keys(resultObj);
    for (let k = 0; k < resultObjKeys.length; k++) {
      if (resultObj[resultObjKeys[k]] !== 0) {
        return false;
      }
    }
  }
  return true;
};

// 1.3 - URLify
exports.uRLify = (string, length) => {
  // create an array to store all the characters
  const result = [];
  // iterate over each letter in string using the lenght input
  for (let i = 0; i < length; i++) {
    // if character is not a space, push character into array
    if (string[i] !== ' ') {
      result.push(string[i]);
    // else push %20 into the result array
    } else {
      result.push('%20');
    }
  }
  // return the stringifyed array
  return result.join('');
};

// 1.4 - Palindrome Permutation
exports.PalindromePermutation = (string) => {
  // declare a object variable to store number of characters
  const characterObj = {};
  // declare a result number to store how many odd numbers there are; set to 0
  let oddCharactersCount = 0;
  // iterate over the string provided
  for (let i = 0; i < string.length; i++) {
    // if that character is not a space && not been added to object add character key and set value to one
    if (string[i] !== ' ' && characterObj[string[i]] === undefined) {
      characterObj[string[i]] = 1;
    // else add 1 to that character's value
    } else if (string[i] !== ' ') {
      characterObj[string[i]]++;
    }
  }
  // iterate over the object
  const characterKeys = Object.keys(characterObj);
  for (let j = 0; j < characterKeys.length; j++) {
    // if value is odd
    if (characterObj[characterKeys[j]] % 2 !== 0) {
      // add one to result number
      oddCharactersCount++;
    }
  }
  // if result number is greater than 1 return false, otherwise return true
  if (oddCharactersCount > 1) {
    return true;
  } else {
    return false;
  }
};

// 1.5 - One Away
exports.oneAway = (stringOne, stringTwo) => {
  let diffTracker = 0;
  const addHelper = (longer, shorter) => {
    // at first place of difference add the variance and invoke the two new variables with the difference helper function
    for (let i = 0; i < longer.length; i++) {
      if (longer[i] !== shorter[i]) {
        if (longer.length !== shorter.length) {
          shorter.splice(i, 0, longer[i]);
          diffTracker++;
        } else {
          diffTracker++;
        }
      }
    }
  };
  // check to see if two strings are equal length
  if (stringOne.length !== stringTwo.length && stringOne.length > stringTwo.length) {
    addHelper(stringOne.split(''), stringTwo.split(''));
  } else {
    addHelper(stringTwo.split(''), stringOne.split(''));
  }
  // check to see if the tracker variable is greater than 1, return boolean depending on the difference
  if (diffTracker > 1) {
    return false;
  } else {
    return true;
  }
};

// 1.6 - String Compression

// 1.7 - Rotate Matriz

// 1.8 - Zero Matrix

// 1.9 - String Rotation

