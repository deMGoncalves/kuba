import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/forgot-password', async function forgotPassword () {
  const { default: Forgot } = await import('./auth' /* webpackChunkName: "forgotPassword" */)
  render(document.body, <Forgot />)
})
