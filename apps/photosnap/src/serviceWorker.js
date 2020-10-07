import * as f from '@rex/f'
import bot from '@rex/boot'

if (f.not(bot)) {
  if (process.env.NODE_ENV === 'production') {
    if ('serviceWorker' in navigator) {
      navigator
        .serviceWorker
        .register('/sw.js')
        .then(registration => console.log('SW registered: ', registration))
        .catch(registrationError => console.log('SW registration failed: ', registrationError))
    }
  }
}
