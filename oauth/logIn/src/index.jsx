import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/login', async function logIn () {
  const { default: LogIn } = await import('./auth' /* webpackChunkName: "logIn" */)
  render(document.body, <LogIn />)
})
