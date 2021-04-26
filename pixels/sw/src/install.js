window
  .addEventListener('beforeinstallprompt', async function (event) {
    event.preventDefault()
    // event.prompt()
    console.log('SW installed:', await event.userChoice)
  })
