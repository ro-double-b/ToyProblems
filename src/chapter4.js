var exports = module.exports = {};
const helper = require('./helper');

// === CHAPTER 4 === //

// 4.1 - Route Between Nodes

exports.routeBetweenNodes = (graph, nodeOne, nodeTwo) => {
  let result = false;
  const innerFunction = (node1, node2) => {
    graph.edges.forEach((index) => {
      if (index[0] === node1) {
        if (index[1] === node2) {
          result = true;
        } else {
          innerFunction(index[1], nodeTwo);
        }
      }
    });
  };
  innerFunction(nodeOne, nodeTwo);
  return result;
};

// 4.2 - Minimal Tree

exports.minimalTree = (array) => {
  
}

// 4.3 - List of Depths

// 4.4 - Check Balanced

// 4.5 - Validate BST

// 4.6 - Successor

// 4.7 - Build Order

// 4.8 - First Common Ancestor

// 4.9 - BST Sequences

// 4.10 - Check Subtree

// 4.11 - Random Node

// 4.12 - Paths with Sum
