if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('SW registered: ', registration)
        registration.pushManager.subscribe({ userVisibleOnly: true })
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
    })
  }
}
