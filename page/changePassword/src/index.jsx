import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/change-password', async function changePassword () {
  const { default: ChangePassword } = await import('./changePassword' /* webpackChunkName: "changePassword" */)
  render(document.body, <ChangePassword />)
})
