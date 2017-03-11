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
  const midpoint = Math.floor(array.length / 2);
  const searchTree = helper.Tree(array[midpoint]);
  const innerFunction = (node, array1, array2) => {
    if (array1.length > 1) {
      const midpoint1 = Math.floor(array1.length / 2);
      node.addChild(array1[midpoint1]);
      innerFunction(node.children[0], array1.slice(0, midpoint1), array1.slice(midpoint1 + 1));
    } else if (array1.length === 1) {
      node.addChild(array1[0]);
    }
    if (array2.length > 1) {
      const midpoint2 = Math.floor(array2.length / 2);
      node.addChild(array2[midpoint2]);
      innerFunction(node.children[1], array2.slice(0, midpoint2), array2.slice(midpoint2 + 1));
    } else if (array2.length === 1) {
      node.addChild(array2[0]);
    }
  };

  innerFunction(searchTree, array.slice(0, midpoint), array.slice(midpoint + 1));
  return searchTree;
};

// 4.3 - List of Depths

exports.listOfDepths = (tree) => {
  // using an array because it is more simple to test, adding values into a linked list would be an easy addition
  const result = [];
  const innerFunction = (node, depth) => {
    if (result[depth] === undefined) {
      result[depth] = [];
    }
    result[depth].push(node.value);
    for (let i = 0; i < node.children.length; i++) {
      innerFunction(node.children[i], depth + 1);
    }
  };
  innerFunction(tree, 0);
  return result;
};

// 4.4 - Check Balanced

exports.checkBalanced = (tree) => {
  const depths = [];
  const innerFunction = (node, depth) => {
    if (node.children === undefined) {
      depths.push(depth);
    }
    for (let i = 0; node.children.length; i++) {
      innerFunction(node.children[i], depth + 1);
    }
  };
  innerFunction(tree, 0);
  if ((Math.max.apply(null, depths) - Math.min.apply(null, depths)) <= 1) {
    return true;
  } else {
    return false;
  }
};

// 4.5 - Validate BST

// realized that the search tree needs to ensure that 0 is left and 1 is right, currently...
// my functions are not doing that and therefore will not work to balidate the BST

// 4.6 - Successor

// 4.7 - Build Order

// 4.8 - First Common Ancestor

// 4.9 - BST Sequences

// 4.10 - Check Subtree

// 4.11 - Random Node

// 4.12 - Paths with Sum
