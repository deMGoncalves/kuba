export default () =>
  navigator
    .serviceWorker
    .register(`https://${location.hostname}/sw.js`, { scope: '/' })
