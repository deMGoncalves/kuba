import h from '@h'
import router from '@router'

import './registerSW.js'
import './reset.css'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ './home')
  document.body.appendChild(<Home />)
})

router(/\/sobre$/i, async () => {
  const { default: Sobre } = await import(/* webpackChunkName: "about" */ './about')
  document.body.appendChild(<Sobre />)
})

router(/\/contato$/i, async () => {
  const { default: Contact } = await import(/* webpackChunkName: "contact" */ './contact')
  document.body.appendChild(<Contact />)
})
