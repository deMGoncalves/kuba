import * as f from '@kuba/f'

export default function (query) {
  const listeners = {
    in () {},
    out () {}
  }

  const match = f.debounce(() => (
    listeners[window.matchMedia(query).matches ? 'in' : 'out']()
  ))

  window.addEventListener('resize', match, f.F())
  window.setTimeout(match, 0)

  return {
    in (target) {
      f.assign(listeners, {
        in: target
      })
      return this
    },

    out (target) {
      f.assign(listeners, {
        out: target
      })
      return this
    }
  }
}
