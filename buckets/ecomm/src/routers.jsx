import h from '@kuba/h'
import router from '@kuba/router'
import render from './render'

router('/', async function home () {
  const { default: Home } = await import('@kuba/home')
  render(<Home />)
})

router('/cadeiras', async function cadeiras () {
  const { default: Cadeiras } = await import('@kuba/cadeiras')
  render(<Cadeiras />)
})

router('/sofas', async function sofas () {
  const { default: Sofas } = await import('@kuba/sofas')
  render(<Sofas />)
})

router('/acessorios', async function acessorios () {
  const { default: Acessorios } = await import('@kuba/acessorios')
  render(<Acessorios />)
})

router('/busca', async function busca () {
  const { default: Busca } = await import('@kuba/busca')
  render(<Busca />)
})

router('', async function notFound () {
  const { default: NotFound } = await import('@kuba/notfound')
  render(<NotFound />)
})
