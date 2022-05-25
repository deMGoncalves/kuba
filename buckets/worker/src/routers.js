import { Router } from 'itty-router'
import marca from './marca'
import shape from './shape'
import shelf from './shelf'
import view from './view'

const router = Router()

router.get('/marca/sitemap.xml', marca.sitemap)
router.get('/marca/:slug', marca)

router.get('/shape/search', shape.search)
router.get('/shape/sitemap.xml', shape.sitemap)
router.get('/shape/:slug', shape)

router.post('/shelf', shelf)
router.post('/shelf/marca', shelf.marca)

router.get('/view/:slug', view)
router.get('/view/marca/:slug', view.marca)

router.all('*', () =>
  new Response('404, not found!', { status: 404 })
)

export default router
