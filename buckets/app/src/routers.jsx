import h from '@kuba/h'
import router from '@kuba/router'
import Category from '@kuba/category'
import Departament from '@kuba/departament'
import Home from '@kuba/home'
import NotFound from '@kuba/notfound'
import Search from '@kuba/search'
import render from './render'

router('/', async function home () {
  // const { default: Home } = await import('@kuba/home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router('/departament', async function departament () {
  // const { default: Departament } = await import('@kuba/departament' /* webpackChunkName: "departament" */)
  render(<Departament />)
})

router('/departament/category', async function category () {
  // const { default: Category } = await import('@kuba/category' /* webpackChunkName: "category" */)
  render(<Category />)
})

router('/search', async function search () {
  // const { default: Search } = await import('@kuba/search' /* webpackChunkName: "search" */)
  render(<Search />)
})

router('', async function notFound () {
  // const { default: NotFound } = await import('@kuba/notfound' /* webpackChunkName: "notfound" */)
  render(<NotFound />)
})
