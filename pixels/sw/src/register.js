export default () =>
  window.addEventListener('load', () =>
    navigator
      .serviceWorker
      .register('/service-worker.js'))
