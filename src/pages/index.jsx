import h from '@h'
import router from '@router'
import './reset.css'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ './home')
  document.body.appendChild(<Home />)
})

router(/^\/mundo-jrmod$/, async () => {
  const { default: MundoJRMod } = await import(/* webpackChunkName: "mundo-jrmod" */ './mundo-jrmod')
  document.body.appendChild(<MundoJRMod />)
})
