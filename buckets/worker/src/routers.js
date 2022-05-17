import { Router } from 'itty-router'
import marca from './marca'
import shape from './shape'

const router = Router()

router.get('/marca/shelf', marca.shelf)
router.get('/marca/sitemap.xml', marca.sitemap)
router.get('/marca/:slug', marca)
router.get('/marca/:slug/view', marca.view)

router.get('/shape/search', shape.search)
router.get('/shape/sitemap.xml', shape.sitemap)
router.get('/shape/marca/:slug', shape.marca)
router.get('/shape/:slug', shape)

router.all('*', () =>
  new Response('404, not found!', { status: 404 })
)

export default router
