import h from '@kuba/h'
import router from '@kuba/router'
import getDepartament from './getDepartament'
import render from './render'

router('/', async function home () {
  const { default: Home } = await import('@kuba/home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router('/:departament', async function departament (params) {
  const { default: Departament } = await import('@kuba/departament' /* webpackChunkName: "departament" */)
  const props = await getDepartament(params)
  render(<Departament { ...props } />)
})

router('/:departament/:category', async function category () {
  const { default: Category } = await import('@kuba/category' /* webpackChunkName: "category" */)
  render(<Category />)
})

router('/departament/category/product', async function product () {
  const { default: Product } = await import('@kuba/product' /* webpackChunkName: "product" */)
  render(<Product />)
})

router('/search', async function search () {
  const { default: Search } = await import('@kuba/search' /* webpackChunkName: "search" */)
  const params = {
    q: new URL(location.href).searchParams.get('q')
  }

  render(<Search {...params} />)
})

router('/not-found', async function notFound () {
  const { default: NotFound } = await import('@kuba/notfound' /* webpackChunkName: "notfound" */)
  render(<NotFound />)
})