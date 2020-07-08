import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <nav className={style.nav}>
    <s.Container className={style.nav__container}>
      <strong className={style.nav__name}>iPhone X🅁</strong>
      <data className={style.nav__price} value='4.299'>A partir de R$ 4.299</data>
    </s.Container>
  </nav>
