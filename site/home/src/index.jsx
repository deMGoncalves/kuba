import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/', async function home () {
  const { default: Home } = await import('./home' /* webpackChunkName: "home" */)
  render(document.body, <Home />)
})
