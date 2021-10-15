import h from '@kuba/h'
import router from '@kuba/router'
import render from './render'

router('/', async function home () {
  const { default: Home } = await import('@kuba/home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router('/search', async function search () {
  const { default: Search } = await import('@kuba/search' /* webpackChunkName: "search" */)
  const params = {
    q: new URL(location.href).searchParams.get('q')
  }

  render(<Search {...params} />)
})

router('/not-found', async function notFound () {
  const { default: NotFound } = await import('@kuba/notfound' /* webpackChunkName: "notfound" */)
  render(<NotFound />)
})
