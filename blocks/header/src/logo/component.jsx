import h from '@kuba/h'
import Logo from '@kuba/logo'

export default (logo) =>
  <Logo onClick={() => logo.redirectTo('shapes')} />
