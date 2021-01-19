export default () =>
  navigator
    .serviceWorker
    .register('https://sw.kuba.engineer/sw.js')
    .then(registration => console.log('SW registered: ', registration))
    .catch(registrationError => console.log('SW registration failed: ', registrationError))
