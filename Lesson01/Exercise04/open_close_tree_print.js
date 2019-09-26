function printNodes(node, level) {
  let message = `${"-".repeat(4 * level)}Node: ${node.nodeName}`;
  if (node.nodeValue) {
    message += `, content: '${node.nodeValue.trim()}'`;
  }

  console.log(message);
  var children = node.childNodes || [];
  for (var i = 0; i < children.length; i++) {
    printNodes(children[i], level + 1);
  }
  if (children.length > 0) {
    console.log(`${"-".repeat(4 * level)}End of: ${node.nodeName}`);
  }
}
printNodes(document, 0);
