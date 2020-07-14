import h from '@h'
import * as s from '@pages/share'
import Promo from './promo'
import style from './style.css'

const nav = Symbol('nav')

export default (product) =>
  <s.Main>
    <s.Header />
    <section className={style.product}>
      { product[nav] }
      <Promo />
    </section>
  </s.Main>

export {
  nav
}
