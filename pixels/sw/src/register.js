import blob from './blob'

export default () =>
  navigator
    .serviceWorker
    .register('sw.js')
    .then(registration => console.log('SW registered: ', registration))
    .catch(registrationError => console.log('SW registration failed: ', registrationError))
