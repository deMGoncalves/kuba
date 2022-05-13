import { Router } from 'itty-router'

const router = Router()

router.get('/', () =>
  new Response('Hello, world! This is the root page of your Worker template.')
)

router.all('*', () =>
  new Response('404, not found!', { status: 404 })
)

export default router
