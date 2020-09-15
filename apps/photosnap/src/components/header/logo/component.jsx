import h from '@rex/h'
import * as c from '@components'
import style from './style.css'

export default (logo) =>
  <c.Picture className={style.logo} onClick={() => logo.redirect()}>
    <source srcSet={logo.src} />
  </c.Picture>
