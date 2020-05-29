import h from '@h'
import config from './config.json'

window.addEventListener('load', async () => {
  const header = { mode: 'no-cors' }
  const app = await fetch('https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js', header).then(response => response.text())
  const analytics = await fetch('https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js', header).then(response => response.text())

  document.body.appendChild(<script>{ app }</script>)
  document.body.appendChild(<script>{ analytics }</script>)

  window.firebase.initializeApp(config)
  window.firebase.analytics()
})
