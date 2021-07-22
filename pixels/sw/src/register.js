export default () =>
  window.addEventListener('load', () =>
    navigator
      .serviceWorker
      .register(`https://${location.hostname}/sw.js`))
