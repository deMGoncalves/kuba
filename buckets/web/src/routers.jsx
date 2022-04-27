import h from '@kuba/h'
import render from './render'
import router from '@kuba/router'

router('/', async function home () {
  const { default: Home } = await import('@kuba/home' /* webpackChunkName: "home" */)
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
  const { default: Shape } = await import('@kuba/shape' /* webpackChunkName: "shape" */)
  render(<Shape />)
})
