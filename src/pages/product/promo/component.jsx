import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default (promo) =>
  <div className={style.promo}>
    <s.Container className={style.promo__container}>
      <p className={style.promo__p}>{ promo.text }</p>
    </s.Container>
  </div>
