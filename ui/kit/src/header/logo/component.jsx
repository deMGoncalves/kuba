import h from '@rex/h'
import Picture from '@rex/kit/src/picture'
import style from './style.css'

export default (logo) =>
  <Picture className={style.logo} onClick={() => logo.redirect()}>
    <source srcSet={logo.src} />
  </Picture>
