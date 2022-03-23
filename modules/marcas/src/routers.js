import h from '@kuba/h'
import render from './render'
import router from './router'

router('/', async function home () {
  const { default: Home } = await import('./home' /* webpackChunkName: "home" */)
  render(<Home />)
})
