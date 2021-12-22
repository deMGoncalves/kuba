import h from '@kuba/h'
import router from '@kuba/router'
import render from './render'

router('/', async function skateboard () {
  const { default: Skate } = await import('./skate' /* webpackChunkName: "skate" */)
  render(<Skate />)
})

router('/longboard', async function longboard () {
  const { default: Longboard } = await import('./longboard' /* webpackChunkName: "longboard" */)
  render(<Longboard />)
})

router('/cruiser', async function cruiser () {
  const { default: Cruiser } = await import('./cruiser' /* webpackChunkName: "cruiser" */)
  render(<Cruiser />)
})
