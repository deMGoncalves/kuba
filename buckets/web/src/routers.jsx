import h from '@kuba/h'
import { setGlobal } from '@kuba/global'
import router from '@kuba/router'
import getMarca from './getMarca'
import getShape from './getShape'
import render from './render'

router('/', async function shapes () {
  const { default: Shapes, getShapes } = await import('./shapes' /* webpackChunkName: "shapes" */)
  const { data: shapes } = await getShapes()

  setGlobal({ shapes })
  render(<Shapes />)
})

router('/marcas', async function marcas () {
  const { default: Marcas, getMarcas } = await import('./marcas' /* webpackChunkName: "marcas" */)
  const { data: marcas } = await getMarcas()

  setGlobal({ marcas })
  render(<Marcas />)
})

router('/:marca', async function marca () {
  const { default: Marca } = await import('./marca' /* webpackChunkName: "marca" */)
  const { data } = await getMarca()

  setGlobal(data)
  render(<Marca />)
})

router('/:marca/:shape', async function shape () {
  const { default: Shape } = await import('./shape' /* webpackChunkName: "shape" */)
  const { data } = await getShape()

  setGlobal(data)
  render(<Shape />)
})
