import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/signup', async function signUp () {
  const { default: SignUp } = await import('./auth' /* webpackChunkName: "signUp" */)
  render(document.body, <SignUp />)
})
