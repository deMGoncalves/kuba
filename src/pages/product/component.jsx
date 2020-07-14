import h from '@h'
import * as s from '@pages/share'
import Promo from './promo'
import style from './style.css'

const oneOff = Symbol('oneOff')

export default (product) =>
  <s.Main>
    <s.Header />
    <section className={style.product}>
      { product[oneOff].nav }
      <Promo />
    </section>
  </s.Main>

export {
  oneOff
}
