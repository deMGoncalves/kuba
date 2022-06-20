const frame = (target) =>
  (...args) => (
    'requestAnimationFrame' in self
      ? self.requestAnimationFrame(() => target(...args))
      : self.setTimeout(() => target(...args), 0)
  )

export default frame
