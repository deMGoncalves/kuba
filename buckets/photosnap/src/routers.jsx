import h, { render } from '@rex/h'
import router from '@rex/router'
import '@rex/reset'

router(/^\/$/, async () => {
  const { default: Home } = await import('@home' /* webpackChunkName: "home" */)
  render(document.body, <Home />)
})

router(/^\/features$/, async () => {
  const { default: Features } = await import('@features' /* webpackChunkName: "features" */)
  render(document.body, <Features />)
})

router(/^\/pricing$/, async () => {
  const { default: Pricing } = await import('@pricing' /* webpackChunkName: "pricing" */)
  render(document.body, <Pricing />)
})

router(/^\/stories$/, async () => {
  const { default: Stories } = await import('@stories' /* webpackChunkName: "stories" */)
  render(document.body, <Stories />)
})
