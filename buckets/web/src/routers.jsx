import h from '@kuba/h'
import router from '@kuba/router'
import render from './render'

router('/', function home () {
  const { default: Home } = require('@kuba/home')
  render(<Home />)
})

router('/departament', function departament () {
  const { default: Departament } = require('@kuba/departament')
  render(<Departament />)
})

router('/departament/category', function category () {
  const { default: Category } = require('@kuba/category')
  render(<Category />)
})

router('/product', function product () {
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

router('', function notFound () {
  const { default: NotFound } = require('@kuba/notfound')
  render(<NotFound />)
})
