import '@pages'

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
      navigator
        .serviceWorker
        .register('https://magtek.web.app/sw.js')
        .then(registration => console.log('SW registered: ', registration))
        .catch(registrationError => console.log('SW registration failed: ', registrationError))
    )
  }
}
