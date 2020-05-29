import config from './config.json'

window.addEventListener('load', () => {
  const init = { mode: 'no-cors' }
  const app = fetch('https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js', init).then(response => response.text())
  const analytics = fetch('https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js', init).then(response => response.text())

  Promise
    .all(app, analytics)
    .then(([app, analytics]) => {
      document.body.appendChild(<script>{ app }</script>)
      document.body.appendChild(<script>{ analytics }</script>)

      window.firebase.initializeApp(config)
      window.firebase.analytics()
    })
})
