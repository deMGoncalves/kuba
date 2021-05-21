import h from '@kuba/h'
import router, { urlFor } from '@kuba/router'
import render from './render'

router(/^\/$/, async function home () {
  const { default: Home } = await import('@/home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router(/^\/not-found$/, async function notFound () {
  const { default: NotFound } = await import('@/notFound' /* webpackChunkName: "notFound" */)
  render(<NotFound />)
})

router(/^\/.+/, () =>
  location.assign(urlFor('notFound')))
