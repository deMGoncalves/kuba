export default (node, vNode) =>
  Math.max(node.childNodes.length, vNode.childNodes.length)
