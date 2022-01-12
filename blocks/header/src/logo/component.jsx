import h from '@kuba/h'
import Logo from '@kuba/logo'

export default (logo) =>
  <Logo className={logo.className} onClick={() => logo.redirectTo('shapes')} />
