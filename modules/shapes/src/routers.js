import h from '@kuba/h'
import render from './render'
import router from './router'

router('/', async function home () {
  const { default: Home } = await import('./home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router('/pro-model', async function pro () {
  const { default: Pro } = await import('./pro' /* webpackChunkName: "pro" */)
  render(<Pro />)
})
