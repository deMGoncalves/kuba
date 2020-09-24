import h, { render } from '@rex/h'
import router from '@rex/router'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackPrefetch: true, webpackPreload: -99999, webpackChunkName: "home" */ '@pages/home')
  render(document.body, <Home />)
})

router(/^\/features$/, async () => {
  const { default: Features } = await import(/* webpackPrefetch: true, webpackPreload: true, webpackChunkName: "features" */ '@pages/features')
  render(document.body, <Features />)
})

router(/^\/pricing$/, async () => {
  const { default: Pricing } = await import(/* webpackPrefetch: true, webpackPreload: true, webpackChunkName: "pricing" */ '@pages/pricing')
  render(document.body, <Pricing />)
})

router(/^\/stories$/, async () => {
  const { default: Stories } = await import(/* webpackPrefetch: true, webpackPreload: true, webpackChunkName: "stories" */ '@pages/stories')
  render(document.body, <Stories />)
})
