'use strict'

window.addEventListener('beforeinstallprompt', (event) => (
  event.preventDefault(),
  event.prompt()
))

window.addEventListener('appinstalled', () => null)
