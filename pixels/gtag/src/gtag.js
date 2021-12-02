import dataLayer from './dataLayer'

window.gtag = (...args) =>
  dataLayer.push(args)

export default window.gtag
