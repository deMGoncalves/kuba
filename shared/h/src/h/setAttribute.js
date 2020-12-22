export default (node) =>
  (key, value) =>
    (value && node.setAttribute(key, value))
