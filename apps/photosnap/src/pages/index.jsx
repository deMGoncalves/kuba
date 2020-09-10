import h, { render } from '@rex/h'
import router from '@rex/router'
import '@rex/reset'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ '@pages/home')
  render(document.body, <Home />)
})

router(/^\/features/, async () => {
  const { default: Features } = await import(/* webpackChunkName: "features" */ '@pages/features')
  render(document.body, <Features />)
})

router(/^\/pricing$/, async () => {
  const { default: Pricing } = await import(/* webpackChunkName: "pricing" */ '@pages/pricing')
  render(document.body, <Pricing />)
})

router(/^\/stories$/, async () => {
  const { default: Stories } = await import(/* webpackChunkName: "stories" */ '@pages/stories')
  render(document.body, <Stories />)
})
