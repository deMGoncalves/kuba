import h from '@rex/h'
import router from '@rex/router'

router(/^\/$/, async function home () {
  const { default: Home } = await import('@home' /* webpackChunkName: "home" */)
  render(<Home />)
})
