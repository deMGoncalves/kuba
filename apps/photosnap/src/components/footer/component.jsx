import h from '@rex/h'
import * as c from '@components'
import photosnap from './photosnap.png'
import Social from './social'
import style from './style.css'

export default () =>
  <footer className={style.footer}>
    <c.Picture className={style.footer__picture}>
      <source srcSet={photosnap} />
    </c.Picture>
    <Social className={style.footer__social} />
  </footer>
