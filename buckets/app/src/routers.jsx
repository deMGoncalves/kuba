import h from '@kuba/h'
import router from '@kuba/router'
import Category from '@kuba/category'
import Departament from '@kuba/departament'
import Home from '@kuba/home'
import NotFound from '@kuba/notfound'
import Search from '@kuba/search'
import render from './render'

router('/', () => render(<Home />))
router('/departament', () => render(<Departament />))
router('/departament/category', () => render(<Category />))
router('/search', () => render(<Search />))
router('', () => render(<NotFound />))
