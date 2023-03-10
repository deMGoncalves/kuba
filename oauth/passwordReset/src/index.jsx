import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/password-reset', async function passwordReset () {
  const { default: PasswordReset } = await import('./passwordReset' /* webpackChunkName: "passwordReset" */)
  render(document.body, <PasswordReset />)
})
