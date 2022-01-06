import h from '@kuba/h'
import { setGlobal } from '@kuba/global'
import router from '@kuba/router'
import getShape from './getShape'
import render from './render'

router('/', async function shapes () {
  const { default: Shapes } = await import('./shapes' /* webpackChunkName: "shapes" */)
  render(<Shapes />)
})

router('/marcas', async function marcas () {
  const { default: Marcas } = await import('./marcas' /* webpackChunkName: "marcas" */)
  render(<Marcas />)
})

router('/:marca', async function marca () {
  const { default: Marca } = await import('./marca' /* webpackChunkName: "marca" */)
  render(<Marca />)
})

router('/:marca/:shape', async function shape () {
  const { default: Shape } = await import('./shape' /* webpackChunkName: "shape" */)
  const { data } = await getShape()

  setGlobal(data)
  render(<Shape />)
})
