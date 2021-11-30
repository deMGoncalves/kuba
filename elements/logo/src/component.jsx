import h from '@kuba/h'
import style from './style'

export default (logo) =>
  <img className={[style.logo, logo.className]} src={logo.url} loading='lazy' alt={logo.name} onClick={() => logo.redirect()} small:isTruthy={logo.small} large:isTruthy={logo.large} />
