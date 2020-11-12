import h from '@rex/h'
import router from '@rex/router'
import render from './render'

router(/^\/$/, async function home () {
  const { default: Home } = await import('@home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router(/^\/features$/, async function features () {
  const { default: Features } = await import('@features' /* webpackChunkName: "features" */)
  render(<Features />)
})

router(/^\/pricing$/, async function pricing () {
  const { default: Pricing } = await import('@pricing' /* webpackChunkName: "pricing" */)
  render(<Pricing />)
})

router(/^\/stories$/, async function stories () {
  const { default: Stories } = await import('@stories' /* webpackChunkName: "stories" */)
  render(<Stories />)
})
