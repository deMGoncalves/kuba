import h from '@kuba/h'
import router from '@kuba/router'
import render from './render'

router('/', async function home () {
  const { default: Home } = await import('./home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router('/comparar', async function compare () {
  const { default: Comparar } = await import('@kuba/comparar' /* webpackChunkName: "comparar" */)
  render(<Comparar />)
})

router('/busca', async function search () {
  const { default: Busca } = await import('@kuba/busca' /* webpackChunkName: "busca" */)
  render(<Busca />)
})

router('/:marca', async function marca () {
  const { default: Marca } = await import('./marca' /* webpackChunkName: "marca" */)
  render(<Marca />)
})

router('/:marca/:shape', async function shape () {
  const { default: Shape } = await import('./shape' /* webpackChunkName: "shape" */)
  render(<Shape />)
})
