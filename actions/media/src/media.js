import * as f from '@kuba/f'

export default function (query) {
  const listeners = { in () {}, out () {} }

  const match = () =>
    listeners[window.matchMedia(query).matches ? 'in' : 'out']()

  window.addEventListener('resize', f.debounce(match))
  window.setTimeout(match, 0)

  return {
    in (handler) {
      listeners.in = handler
      return this
    },

    out (handler) {
      listeners.ou = handler
      return this
    }
  }
}
