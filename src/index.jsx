import h from '@h'
import router from '@router'
import './registerSW.js'
import './reset.css'

router(/^\/$/, async () => {
  document.body.appendChild(
    <h1>Rex.JS</h1>
  )
})
