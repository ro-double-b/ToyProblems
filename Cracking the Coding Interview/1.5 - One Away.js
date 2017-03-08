const oneAway = (stringOne, stringTwo) => {
  let diffTracker = 0;
  const addHelper = (longer, shorter) => {
    // at first place of difference add the variance and invoke the two new variables with the difference helper function
    for (let i = 0; i < longer.length; i++) {
      if (longer[i] !== shorter[i]) {
        shorter.slice(i, 0, longer[i]);
        diffTracker++;
      }
    }
  };
  // check to see if two strings are equal lenght
  if (stringOne.length !== stringTwo.length && stringOne.length > stringTwo.length) {
    addHelper(stringOne, stringTwo);
  } else {
    addHelper(stringTwo, stringOne);
  }
  // check to see if the tracker variable is greater than 1, return boolean depending on the difference
  if (diffTracker > 1) {
    return false;
  } else {
    return true;
  }
};
