import * as f from '@kuba/f'

export default function (query) {
  const listeners = { in () {}, out () {} }

  const match = () =>
    listeners[window.matchMedia(query).matches ? 'in' : 'out']()

  window.addEventListener('resize', f.debounce(match), 0)
  window.setTimeout(match, 0)

  return {
    in (listener) {
      listeners.in = listener
      return this
    },

    out (listener) {
      listeners.out = listener
      return this
    }
  }
}
