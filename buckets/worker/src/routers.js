import { Router } from 'itty-router'
import marca from './marca'

const router = Router()

router.get('/marca/shelf', marca.shelf)
router.get('/marca/sitemap.xml', marca.sitemap)
router.get('/marca/:slug', marca)
router.get('/marca/:slug/view', marca.view)

router.all('*', () =>
  new Response('404, not found!', { status: 404 })
)

export default router
