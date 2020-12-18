export default (component) =>
  self.postMessage({
    type: 'render',
    payload: component()
  })
