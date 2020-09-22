window.GoogleAnalyticsObject = 'ga'

window.ga = (...args) =>
  (window.ga.q = window.ga.q || []).push(args)

window.ga.l = 1 * new Date()

export default window.ga
