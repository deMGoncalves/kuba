import h from '@kuba/h'
import router from '@kuba/router'
import render from './render'

router('/', async function shape () {
  const { default: Shape } = await import('./shape' /* webpackChunkName: "shape" */)
  render(<Shape />)
})

router('/marcas', async function marca () {
  const { default: Marca } = await import('./marca' /* webpackChunkName: "marca" */)
  render(<Marca />)
})
