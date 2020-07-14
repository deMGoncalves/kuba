import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default (nav) =>
  <nav className={style.nav}>
    <s.Container className={style.nav__container}>
      <strong className={style.nav__name}>{ nav.name }</strong>
      <data className={style.nav__price} value='4.299'>A partir de R$ 4.299</data>
    </s.Container>
  </nav>
