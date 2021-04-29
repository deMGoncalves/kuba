import h from '@kuba/h'
import router from '@kuba/router'
import render from '@/render'

router(/^\/components\/box$/, async function box () {
  const { default: Box } = await import('./box' /* webpackChunckName: "box" */)
  render(<Box/>)
})
