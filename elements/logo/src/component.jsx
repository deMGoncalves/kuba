import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style.css'

export default (logo) =>
  <Picture className={style.logo} alt={logo.name} onClick={() => logo.redirect()}>
    <source srcSet={logo.url} />
  </Picture>
