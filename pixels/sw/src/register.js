export default () =>
  navigator
    .serviceWorker
    .register(`https://${location.hostname}/sw.js`, { scope: '/' })
    .then(registration => console.log('SW registered:', registration))
    .catch(registrationError => console.log('SW registration failed:', registrationError))
