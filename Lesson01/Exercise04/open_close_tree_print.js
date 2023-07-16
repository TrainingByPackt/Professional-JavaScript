
// func that will be called for each node in the tree. Receive two arguments: The node to print and the node depth that the node is at in the DOM tree.
function printNodes(node, level) {

  // identifying the the opening of this node using nodeName
  let message = `${"-".repeat(4 * level)}Node: ${node.nodeName}`;

  //Also Appending to the message if the node also has an nodeValue associated with it, like Text and other text inline nodes, then print it in the console.
  if (node.nodeValue) {
    message += `, content: '${node.nodeValue.trim()}'`;
  }
  console.log(message);

  // After that we fetch all the child nodes for the current node.
  let children = node.childNodes || [];

  // Now we can iterate over the array using a for of loop. FOr each child node we find we'll call the function again, iterating the recursive nature of the algorithm.
  for (const element of children) {
    printNodes(element, level + 1);
  }

  // printing a closing message for nodes that have children.
  if (children.length > 0) {
    console.log(`${"-".repeat(4 * level)}End of:${node.nodeName}`);
  }

}
// Initiating the recursion by calling the function and passing the document as the root node with the level zero.
printNodes(document, 0);
