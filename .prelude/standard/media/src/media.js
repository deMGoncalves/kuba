function media (query) {
  const listeners = {}
  const match = () => (
    listeners[window.matchMedia(query).matches ? 'in' : 'out']?.()
  )

  window.addEventListener('resize', match)
  window.dispatchEvent(new Event('resize'))

  return {
    in (functionRef) {
      Object.assign(listeners, { in: functionRef })
      return this
    },

    out (functionRef) {
      Object.assign(listeners, { out: functionRef })
      return this
    }
  }
}

export default media
