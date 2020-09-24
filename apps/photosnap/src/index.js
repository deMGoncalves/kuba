import '@pages'
import '@rex/reset'
import '@rex/gtag'
import '@rex/ga'
import '@rex/gtm'
import '@rex/hotjar'
import '@rex/trackjs'

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('DOMContentLoaded', () =>
      navigator
        .serviceWorker
        .register('/sw.js')
        .then(registration => console.log('SW registered: ', registration))
        .catch(registrationError => console.log('SW registration failed: ', registrationError))
    )
  }
}
