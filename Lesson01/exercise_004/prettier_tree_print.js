function printNodes(node, indent) {
  if (node.parentNode === null) {
    console.log(node.nodeName);
  } else {
    console.log(`${indent}+---${node.nodeName}`);
    indent += node.nextSibling === null ? "   " : "|   ";
  }
  
  var children = node.childNodes || [];
  for (var i = 0; i < children.length; i++) {
    printNodes(children[i], indent);
  }  
}

printNodes(document, "");
