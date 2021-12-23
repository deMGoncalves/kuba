import h from '@kuba/h'
import router from '@kuba/router'
import render from './render'

router('/', async function shape () {
  const { default: Shape } = await import('./shape' /* webpackChunkName: "shape" */)
  render(<Shape />)
})

router('/lixa', async function lixa () {
  const { default: Lixa } = await import('./lixa' /* webpackChunkName: "lixa" */)
  render(<Lixa />)
})

router('/truck', async function truck () {
  const { default: Truck } = await import('./truck' /* webpackChunkName: "truck" */)
  render(<Truck />)
})

router('/rolamento', async function rolamento () {
  const { default: Rolamento } = await import('./rolamento' /* webpackChunkName: "rolamento" */)
  render(<Rolamento />)
})

router('/roda', async function roda () {
  const { default: Roda } = await import('./roda' /* webpackChunkName: "roda" */)
  render(<Roda />)
})
