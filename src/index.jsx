import h from '@h'
import router from '@router'

import './registerSW.js'
import './reset.css'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ './home')
  document.body.appendChild(<Home />)
})

router(/^\/xablau$/, () => {
  document.body.appendChild(<h1>Eai, blz</h1>)
})
