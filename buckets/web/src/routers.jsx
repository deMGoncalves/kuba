import h from '@kuba/h'
import router from '@kuba/router'
import getDepartament from './getDepartament'
import render from './render'

router('/', function home () {
  const { default: Home } = require('@kuba/home')
  render(<Home />)
})

router('/:departament', async function departament (params) {
  const { default: Departament } = require('@kuba/departament')
  const props = await getDepartament(params)
  render(<Departament { ...props } />)
})

router('/:departament/:category', function category () {
  const { default: Category } = require('@kuba/category')
  render(<Category />)
})

router('/departament/category/product', function product () {
  const { default: Product } = require('@kuba/product')
  render(<Product />)
})

router('/search', function search () {
  const { default: Search } = require('@kuba/search')
  const params = {
    q: new URL(location.href).searchParams.get('q')
  }

  render(<Search {...params} />)
})

router('/not-found', function notFound () {
  const { default: NotFound } = require('@kuba/notfound')
  render(<NotFound />)
})
