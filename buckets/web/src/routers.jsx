import h from '@kuba/h'
import Category from '@kuba/category'
import Departament from '@kuba/departament'
import NotFound from '@kuba/notfound'
import Home from '@kuba/home'
import router from '@kuba/router'
import Search from '@kuba/search'
import render from './render'

router('/', function home () {
  render(<Home />)
})

router('/departament', function departament () {
  render(<Departament />)
})

router('/departament/category', function category () {
  render(<Category />)
})

router('/search', function search () {
  const params = {
    q: new URL(location.href).searchParams.get('q')
  }

  render(<Search {...params} />)
})

router('', function notFound () {
  render(<NotFound />)
})
