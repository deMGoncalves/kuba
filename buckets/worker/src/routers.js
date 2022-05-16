import { Router } from 'itty-router'
import marca from './marca'

const router = Router()

router.get('/marca/:slug', marca)

router.all('*', () =>
  new Response('404, not found!', { status: 404 })
)

export default router