export default (payload) =>
  self.postMessage({ type: 'render', payload })
