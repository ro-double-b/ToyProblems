/* eslint-disable */ 

const expect = require('chai').expect;
const chapterOne = require('./chapter1');
const chapterTwo = require('./chapter2');
const chapterThree = require('./chapter3');
const chapterFour = require('./chapter4');

// =================================================
// =================================================

describe('Chapter One', function() {

  it('1.1 - Is Unique', function() {
    expect(chapterOne.isUnique('abc')).to.be.true;
    expect(chapterOne.isUnique('abcc')).to.be.false;
    expect(chapterOne.isUnique('abc1')).to.be.true;
    expect(chapterOne.isUnique('abc11')).to.be.false;
  })

  it('1.2 - Check Permutation', function() {
    expect(chapterOne.checkPermutation('hello', 'olleh')).to.be.true;
    expect(chapterOne.checkPermutation('hello', 'ollehh')).to.be.false;
  })

  it('1.3 - URLify', function() {
      expect(true).to.be.false;
    })
  
  it('1.4 - Palindrome Permutation', function() {
      expect(true).to.be.false;
    })
  
  it('1.5 - One Away', function() {
      expect(true).to.be.false;
    })
  
  xit('1.6 - String Compression', function() {
      
    })
  
  xit('1.7 - Rotate Matrix', function() {
      
    })

  xit('1.8 - Zero Matrix', function() {
      
    })

  xit('1.9 - String Rotation', function() {
      
    })
})

describe('Chapter Two', function() {

  it('2.1 - Remove Dups', function() {
    expect(true).to.be.false;
  })

  it('2.2 - Return Kth to Last', function() {
    expect(true).to.be.false;
  })

  it('2.3 - Delete Middle Node', function() {
      expect(true).to.be.false;
    })
  
  it('2.4 - Partition', function() {
      expect(true).to.be.false;
    })
  
  it('2.5 - Sum Lists', function() {
      expect(true).to.be.false;
    })
  
  xit('2.6 - Palindrome', function() {
      
    })
  
  xit('2.7 - Intersection', function() {
      
    })

  xit('2.8 - Loop Detection', function() {
      
    })
})

describe('Chapter Three', function() {

  xit('3.1 - Three in One', function() {
    
  })

  xit('3.2 - Stack Min', function() {
    
  })

  xit('3.3 - Stack of Plates', function() {

  })
  
  xit('3.4 - Queue via Stacks', function() {

  })
  
  xit('3.5 - Short Stack', function() {

  })
  
  xit('3.6 - Animal Shelter', function() {

  })
})