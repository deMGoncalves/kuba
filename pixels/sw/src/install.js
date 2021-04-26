window
  .addEventListener('beforeinstallprompt', function () {
    // event.preventDefault()
    // event.prompt()
    // console.log('SW installed:', await event.userChoice)
  })

window
  .addEventListener('appinstalled', () => console.log('SW was installed'))
