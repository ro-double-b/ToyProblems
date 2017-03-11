/* eslint-disable */ 

const expect = require('chai').expect;
const helper = require('./helper')
const chapterOne = require('./chapter1');
const chapterTwo = require('./chapter2');
const chapterThree = require('./chapter3');
const chapterFour = require('./chapter4');
const chapterEight = require('./chapter8');

// =================================================
// =================================================

describe('Chapter One: Arrays and Strings', function() {

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
      expect(chapterOne.uRLify('Mr John Smith      ', 13)).to.equal('Mr%20John%20Smith');
  })
  
  it('1.4 - Palindrome Permutation', function() {
      expect(chapterOne.PalindromePermutation('Tact Coa')).to.be.true;
  })
  
  it('1.5 - One Away', function() {
      expect(chapterOne.oneAway('pale', 'ple')).to.be.true;
      expect(chapterOne.oneAway('pales', 'pale')).to.be.true;
      expect(chapterOne.oneAway('pale', 'bale')).to.be.true;
      expect(chapterOne.oneAway('pale', 'bake')).to.be.false;
  })
  
  it('1.6 - String Compression', function() {

      
  })
  
  xit('1.7 - Rotate Matrix', function() {
      
  })

  xit('1.8 - Zero Matrix', function() {
      
  })

  xit('1.9 - String Rotation', function() {
      
  })
})

describe('Chapter Two: Linked Lists', function() {

  it('2.1 - Remove Dups', function() {
    // check to make sure that dup is removed
    var listOne = helper.LinkedList()
    listOne.addToTail(2)
    listOne.addToTail(2)
    listOne.addToTail(3)
    chapterTwo.removeDups(listOne)
    expect(listOne.head.next.value).to.equal(3)

    // check to make sure that tail is properly re-assigned if dup is last number
    var listTwo = helper.LinkedList()
    listTwo.addToTail(2)
    listTwo.addToTail(3)
    listTwo.addToTail(2)
    chapterTwo.removeDups(listTwo)
    expect(listTwo.tail.value).to.equal(3)
  })

  it('2.2 - Return Kth to Last', function() {
    var linkedList = helper.LinkedList()
    linkedList.addToTail(5)
    linkedList.addToTail(4)
    linkedList.addToTail(3)
    linkedList.addToTail(2)
    linkedList.addToTail(1)
    expect(chapterTwo.kThToLast(linkedList, 5)).to.equal(5)
    expect(chapterTwo.kThToLast(linkedList, 3)).to.equal(3)
  })

  it('2.3 - Delete Middle Node', function() {
      var linkedList = helper.LinkedList()
      linkedList.addToTail('a')
      linkedList.addToTail('b')
      linkedList.addToTail('c')
      linkedList.addToTail('d')
      linkedList.addToTail('e')
      linkedList.addToTail('f')
      var deleteNode = linkedList.head.next.next
      chapterTwo.deleteMiddleNode(deleteNode)
      expect(linkedList.head.value).to.equal('a')
      expect(linkedList.head.next.value).to.equal('b')
      expect(linkedList.head.next.next.value).to.equal('d')
      expect(linkedList.head.next.next.next.value).to.equal('e')
      expect(linkedList.tail.value).to.equal('f')
  })
  
  it('2.4 - Partition', function() {
    var linkedList = helper.LinkedList()
    linkedList.addToTail(3)
    linkedList.addToTail(5)
    linkedList.addToTail(8)
    linkedList.addToTail(5)
    linkedList.addToTail(10)
    linkedList.addToTail(2)
    linkedList.addToTail(1)
    var result = chapterTwo.partition(linkedList, 5)
    // there are 3 numbers less than 5 & 4 greater
    expect(result.head.value).to.be.below(5)
    expect(result.head.next.value).to.be.below(5)
    expect(result.head.next.next.value).to.be.below(5)
    expect(result.head.next.next.next.value).to.be.at.least(5)
    expect(result.head.next.next.next.next.value).to.be.at.least(5)
    expect(result.head.next.next.next.next.next.value).to.be.at.least(5)
    expect(result.tail.value).to.be.at.least(5)
  })
  
  it('2.5 - Sum Lists', function() {
  // test just one node
  var listOne = helper.LinkedList()
  listOne.addToTail(7)
  listOne.addToTail(1)
  listOne.addToTail(6)
  var listTwo = helper.LinkedList()
  
  var testFirstNode = chapterTwo.sumLists(listOne, listTwo)
  expect(testFirstNode.head.value).to.equal(listOne.head.value)
  expect(testFirstNode.head.next.value).to.equal(listOne.head.next.value)
  expect(testFirstNode.head.next.next.value).to.equal(listOne.head.next.next.value)

  var testSecondNode = chapterTwo.sumLists(listTwo, listOne)
  expect(testSecondNode.head.value).to.equal(listOne.head.value)
  expect(testSecondNode.head.next.value).to.equal(listOne.head.next.value)
  expect(testSecondNode.head.next.next.value).to.equal(listOne.head.next.next.value)

  // test two nodes
  listTwo.addToTail(8)
  listTwo.addToTail(9)
  listTwo.addToTail(1)
  var testTwoNodes = chapterTwo.sumLists(listOne, listTwo)
  expect(testTwoNodes.head.value).to.equal(5)
  expect(testTwoNodes.head.next.value).to.equal(1)
  expect(testTwoNodes.head.next.next.value).to.equal(8)

  // test if nodes different length
  listTwo.addToTail(9)
  var testDiffLengthNodes = chapterTwo.sumLists(listOne, listTwo)
  expect(testDiffLengthNodes.head.next.next.next.value).to.equal(9)
  })
  
  xit('2.6 - Palindrome', function() {
      
  })
  
  xit('2.7 - Intersection', function() {
      
  })

  xit('2.8 - Loop Detection', function() {
      
  })
})

describe('Chapter Three: Stacks and Queues', function() {

  it('3.1 - Three in One', function() {
    var stack1 = helper.Stack()
    var stack2 = helper.Stack()
    var stack3 = helper.Stack()

    var threeStack = chapterThree.threeInOne()
    stack1.push(1)
    threeStack.one.push(1)
    stack1.push(2)
    threeStack.one.push(2)

    stack2.push(5)
    threeStack.two.push(5)

    stack3.push(8)
    threeStack.three.push(8)

    expect(threeStack.one.pop()).to.equal(stack1.pop())
    expect(threeStack.three.pop()).to.equal(stack3.pop())
    expect(threeStack.two.pop()).to.equal(stack2.pop())
    expect(threeStack.one.pop()).to.equal(stack1.pop())
  })

  it('3.2 - Stack Min', function() {
    var testStack = chapterThree.stackMin();
    testStack.push(5)
    expect(testStack.min()).to.equal(5)
    testStack.push(2)
    expect(testStack.min()).to.equal(2)
    testStack.push(8)
    expect(testStack.min()).to.equal(2)
    testStack.push(2)
    expect(testStack.min()).to.equal(2)
    testStack.pop()
    expect(testStack.min()).to.equal(2)
    testStack.pop()
    expect(testStack.min()).to.equal(2)
    testStack.pop()
    expect(testStack.min()).to.equal(5)
  })

  xit('3.3 - Stack of Plates', function() {
    
  })
  
  it('3.4 - Queue via Stacks', function() {
    var regularStack = helper.Queue()
    var queueStack = chapterThree.MyQueue()
    
    regularStack.enqueue(1)
    queueStack.enqueue(1)
    regularStack.enqueue(2)
    queueStack.enqueue(2)
    regularStack.enqueue(3)
    queueStack.enqueue(3)

    expect(regularStack.dequeue()).to.equal(queueStack.dequeue())
    expect(regularStack.dequeue()).to.equal(queueStack.dequeue())
    expect(regularStack.dequeue()).to.equal(queueStack.dequeue())

  })
  
  xit('3.5 - Short Stack', function() {

  })
  
  xit('3.6 - Animal Shelter', function() {

  })
})

describe('Chapter Four: Trees and Graphs', function() {

  it('4.1 - Route Between Nodes', function() {
    var graph = helper.Graph()
    graph.addNode(1)
    graph.addNode(2)
    graph.addNode(3)
    graph.addEdge(1, 2)
    graph.addEdge(2, 3)
    expect(chapterFour.routeBetweenNodes(graph, 1, 3)).to.be.true
    expect(chapterFour.routeBetweenNodes(graph, 1, 2)).to.be.true
    expect(chapterFour.routeBetweenNodes(graph, 1, 4)).to.be.false

  })

  it('4.2 - Minimal Tree', function() {
    expect(chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]).value).to.equal(5)

    expect(chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]).children[0].value).to.equal(3)
    expect(chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]).children[1].value).to.equal(8)

    expect(chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]).children[0].children[0].value).to.equal(2)
    expect(chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]).children[0].children[1].value).to.equal(4)

    expect(chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]).children[0].children[0].children[0].value).to.equal(1)

    expect(chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]).children[1].children[0].value).to.equal(7)
    expect(chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]).children[1].children[1].value).to.equal(9)

    expect(chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]).children[1].children[0].children[0].value).to.equal(6)
  })

  it('4.3 - List of Depths', function() {
    var biTree = chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9])
    var depthArry = chapterFour.listOfDepths(biTree)
    expect(depthArry[0]).to.deep.equal([5])
    expect(depthArry[1]).to.deep.equal([3, 8])
    expect(depthArry[2]).to.deep.equal([2, 4, 7, 9])
    expect(depthArry[3]).to.deep.equal([1, 6])
  })
  
  it('4.4 - Check Balanced', function() {
    var balancedTree = chapterFour.minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(chapterFour.checkBalanced(balancedTree)).to.be.true
    balancedTree.children[0].children[0].children[0].addChild(3)
    balancedTree.children[0].children[0].children[0].children[0].addChild(3)
    expect(chapterFour.checkBalanced(balancedTree)).to.be.false

  })
  
  xit('4.5 - Validate BST', function() {

  })
  
  xit('4.6 - Successor', function() {

  })

  xit('4.7 - Build Order', function() {
    
  })

  xit('4.8 - First Common Ancestor', function() {
    
  })

  xit('4.9 - BST Sequences', function() {

  })
  
  xit('4.10 - Check Subtree', function() {

  })
  
  xit('4.11 - Random Node', function() {

  })
  
  xit('4.12 - Path with Sum', function() {

  })

})

describe('Chapter Eight: Recursion and Dynamic Programing', function() {

  it('8.1 - Triple Step', function() {
    expect(chapterEight.tripleStep(1)).to.be.equal(1)
    expect(chapterEight.tripleStep(2)).to.be.equal(2)
    expect(chapterEight.tripleStep(3)).to.be.equal(4) 
    expect(chapterEight.tripleStep(4)).to.be.equal(7)

  })

  it('8.2 - Robot in a Grid', function() {
    expect(chapterEight.robotInAGrid(2, 2)).to.deep.equal([ 'r', 'r', 'd', 'd' ])
    expect(chapterEight.robotInAGrid(2, 2, [[0, 1]])).to.deep.equal([ 'd', 'r', 'r', 'd' ])
    expect(chapterEight.robotInAGrid(2, 2, [[0, 0]])).to.be.false
    expect(chapterEight.robotInAGrid(2, 2, [[0, 1], [1, 0]])).to.be.false
    expect(chapterEight.robotInAGrid(2, 2, [[2, 2]])).to.be.false
  })

  it('8.3 - Magic Index', function() {
    expect(chapterEight.magicIndex([0, 2, 3, 6, 18])).to.be.equal(0)
    expect(chapterEight.magicIndex([-10, 1, 3, 6, 18])).to.be.equal(1)
    expect(chapterEight.magicIndex([-10, -9, -8, -1, 4])).to.be.equal(4)
  })
  
  xit('8.4 - Power Set', function() {
    
  })
  
  it('8.5 - Recursive Multiply', function() {
    expect(chapterEight.recursiveMultiply(2, 2)).to.be.equal(4)
    expect(chapterEight.recursiveMultiply(1, 2)).to.be.equal(2)
    expect(chapterEight.recursiveMultiply(2, 1)).to.be.equal(2)
    expect(chapterEight.recursiveMultiply(2, 2)).to.be.equal(4)
  })
  
  xit('8.6 - Towers of Hanoi', function() {

  })

  xit('8.7 - Permutations without Dups', function() {
    
  })

  xit('8.8 - Permutations with Dups', function() {
    
  })

  xit('8.9 - Parens', function() {

  })
  
  xit('8.10 - Paint Fill', function() {

  })
  
  xit('8.11 - Coins', function() {

  })
  
  xit('8.12 - Eight Queens', function() {

  })

  xit('8.13 - Stack of Boxes', function() {

  })

  xit('8.14 - Boolean Evaluation', function() {

  })

})
