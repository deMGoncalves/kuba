import * as f from '@rex/f'

window.hj = (...args) =>
  (window.hj.q = window.hj.q || []).push(args)

export default f.idle(window.hj)
