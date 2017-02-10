const checkPermutation = (stringOne, stringTwo) => {
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
