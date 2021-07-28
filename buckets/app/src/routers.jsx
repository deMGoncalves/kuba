import h from '@kuba/h'
import router from '@kuba/router'
import Category from '@kuba/category'
import Departament from '@kuba/departament'
import Home from '@kuba/home'
import NotFound from '@kuba/notfound'
import Search from '@kuba/search'
import render from './render'

router('/', function home () { render(<Home />) })
router('/departament', function departament () { render(<Departament />) })
router('/departament/category', function category () { render(<Category />) })
router('/search', function search () { render(<Search />) })
router('', function notfound () { render(<NotFound />) })
