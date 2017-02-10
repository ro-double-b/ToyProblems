const PalindromePermutation = (string) => {
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
    return false;
  } else {
    return true;
  }
};
