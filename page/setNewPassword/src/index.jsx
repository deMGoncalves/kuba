import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/set-new-password', async function setNewPassword () {
  const { default: SetNewPassword } = await import('./setNewPassword' /* webpackChunkName: "setNewPassword" */)
  render(document.body, <SetNewPassword />)
})
