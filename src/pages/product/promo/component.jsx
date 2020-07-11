import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default () =>
  <div className={style.promo}>
    <s.Container className={style.promo__container}>
      <p className={style.promo__p}>
        Frete grátis para todos os iPhones. Em São Paulo, os pedidos qualificados têm envio gratuito no dia seguinte.
      </p>
    </s.Container>
  </div>
