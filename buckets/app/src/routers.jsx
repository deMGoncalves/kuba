import h from '@kuba/h'
import router, { urlFor } from '@kuba/router'
import render from './render'

router(/^\/$/, async function home () {
  const { default: Home } = await import('@/home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router(/^\/mindset$/, async function mindset () {
  const { default: Mindset } = await import('@/mindset' /* webpackChunckName: "mindset" */)
  render(<Mindset />)
})

router(/^\/guidelines$/, async function guidelines () {
  const { default: Guidelines } = await import('@/guidelines' /* webpackChunckName: "guidelines" */)
  render(<Guidelines />)
})

router(/^\/structure$/, async function structure () {
  const { default: Structure } = await import('@/structure' /* webpackChunckName: "structure" */)
  render(<Structure />)
})

router(/^\/components$/, async function components () {
  const { default: Components } = await import('@/components' /* webpackChunckName: "components" */)
  render(<Components />)
})

router(/^\/page-not-found$/, async function notFound () {
  const { default: NotFound } = await import('@/notFound' /* webpackChunkName: "notFound" */)
  render(<NotFound />)
})

router(/^\/([\S]+)/, () => location.assign(urlFor('notFound')))
