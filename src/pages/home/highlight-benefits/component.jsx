import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.benefits}>
    <s.Container>
      <ul className={style.benefits__ul}>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>people_outline</s.Icon>
          <a href='#' className={style.benefits__a}>parceria com representantes globais</a>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>shopping_bag</s.Icon>
          <a href='#' className={style.benefits__a}>souvenier da família JRMod</a>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>verified</s.Icon>
          <a href='#' className={style.benefits__a}>pedais refinados para ouvidos exigentes</a>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>loyalty</s.Icon>
          <a href='#' className={style.benefits__a}>produto confeccionado com primazia e paixão</a>
        </li>
      </ul>
    </s.Container>
  </section>
