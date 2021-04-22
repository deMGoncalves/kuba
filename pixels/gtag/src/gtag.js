import * as f from '@kuba/f'

window.gtag = (...args) =>
  (window.dataLayer = window.dataLayer || []).push(args)

export default f.idle(window.gtag)
