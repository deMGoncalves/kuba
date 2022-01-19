import h from '@kuba/h'
import { setGlobal } from '@kuba/global'
import router from '@kuba/router'
import render from './render'

router('/', async function shapes () {
  const { default: Shapes } = await import('./shapes' /* webpackChunkName: "shapes" */)
  render(<Shapes />)
})

router('/comparar', async function comparar () {
  const { default: Comparar } = await import('./comparar' /* webpackChunkName: "comparar" */)
  render(<Comparar />)
})

router('/marcas', async function marcas () {
  const { default: Marcas } = await import('./marcas' /* webpackChunkName: "marcas" */)
  render(<Marcas />)
})

router('/:marca', async function marca () {
  const { default: Marca, getMarca } = await import('./marca' /* webpackChunkName: "marca" */)
  const { data } = await getMarca()

  setGlobal(data)
  render(<Marca />)
})

router('/:marca/:shape', async function shape () {
  const { default: Shape, getShape } = await import('./shape' /* webpackChunkName: "shape" */)
  const { data } = await getShape()

  setGlobal(data)
  render(<Shape />)
})
