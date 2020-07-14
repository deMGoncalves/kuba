import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

const nav = Symbol('nav')
const promo = Symbol('promo')

export default (product) =>
  <s.Main>
    <s.Header />
    <section className={style.product}>
      { product[nav] }
      { product[promo] }
    </section>
  </s.Main>

export {
  nav,
  promo
}
