window.gtag = (...args) =>
  (window.dataLayer = window.dataLayer || []).push(args)

export default window.gtag
