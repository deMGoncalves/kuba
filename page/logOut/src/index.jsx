import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/logout', async function logOut () {
  const { default: LogOut } = await import('./auth' /* webpackChunkName: "logOut" */)
  render(document.body, <LogOut />)
})
