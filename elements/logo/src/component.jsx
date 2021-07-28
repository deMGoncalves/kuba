import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (logo) =>
  <Picture className={[style.logo, logo.className]} alt={logo.name} onClick={() => logo.redirect()}>
    <source srcSet={logo.url} />
  </Picture>
