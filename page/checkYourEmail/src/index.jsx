import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/check-your-email', async function checkYourEmail () {
  const { default: CheckYourEmail } = await import('./auth' /* webpackChunkName: "checkYourEmail" */)
  render(document.body, <CheckYourEmail />)
})
