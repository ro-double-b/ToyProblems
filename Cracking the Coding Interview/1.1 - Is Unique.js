const isUnique = (string) => {
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
