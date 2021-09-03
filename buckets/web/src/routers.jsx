import h from '@kuba/h'
import Category from '@kuba/category'
import Departament from '@kuba/departament'
import NotFound from '@kuba/notfound'
import Home from '@kuba/home'
import router from '@kuba/router'
import Search from '@kuba/search'
import render from './render'

router('/', function home () {
  // const { default: Home } = await import('@kuba/home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router('/departament', function departament () {
  // const { default: Departament } = await import('@kuba/departament' /* webpackChunkName: "departament" */)
  render(<Departament />)
})

router('/departament/category', function category () {
  // const { default: Category } = await import('@kuba/category' /* webpackChunkName: "category" */)
  render(<Category />)
})

router('/search', function search () {
  // const { default: Search } = await import('@kuba/search' /* webpackChunkName: "search" */)
  const params = {
    q: new URL(location.href).searchParams.get('q')
  }

  render(<Search {...params} />)
})

router('', function notFound () {
  // const { default: NotFound } = await import('@kuba/notfound' /* webpackChunkName: "notfound" */)
  render(<NotFound />)
})
