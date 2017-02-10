const uRLify = (string, length) => {
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
