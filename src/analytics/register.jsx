import h from '@h'
import config from './config.json'

window.addEventListener('load', async () => {
  const url = (file) =>
    `https://www.gstatic.com/firebasejs/7.14.5/firebase-${file}.js`

  document.body.appendChild(<script src={url('app')} onLoad={() => firebase.initializeApp(config)} />)
  document.body.appendChild(<script src={url('analytics')} onLoad={() => firebase.analytics()} />)
})
