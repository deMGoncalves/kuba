import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (logo) =>
  <Picture className={[style.logo, logo.className]} onClick={() => logo.redirect()} small:isTruthy={logo.small} large:isTruthy={logo.large} oncolor:isTruthy={logo.onColor} alt={logo.name}>
    <source srcSet={logo.url} />
  </Picture>
