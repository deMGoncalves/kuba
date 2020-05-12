const blob = new Blob(
  [`self.addEventListener('message', e => self.postMessage(e.data))`],
  { type: 'application/javascript' }
)

export default new Worker(window.URL.createObjectURL(blob))
