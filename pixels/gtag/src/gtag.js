import * as f from '@rex/f'

window.gtag = (...args) =>
  (window.dataLayer = window.dataLayer || []).push(args)

export default f.idle(window.gtag)
