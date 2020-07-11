import h from '@h'
import * as s from '@pages/share'
import Nav from './nav'
import Promo from './promo'
import style from './style.css'

export default () =>
  <s.Main>
    <s.Header />
    <section className={style.product}>
      <Nav />
      <Promo />
    </section>
  </s.Main>
