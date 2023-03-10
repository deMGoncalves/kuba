export default new Blob(
  ['self.addEventListener(\'message\', e => self.postMessage(e.data))'],
  { type: 'application/javascript' }
)
