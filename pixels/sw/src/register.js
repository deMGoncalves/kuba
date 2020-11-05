import blob from './blob'

export default () =>
  navigator
    .serviceWorker
    .register(window.URL.createObjectURL(blob))
    .then(registration => console.log('SW registered: ', registration))
    .catch(registrationError => console.log('SW registration failed: ', registrationError))
