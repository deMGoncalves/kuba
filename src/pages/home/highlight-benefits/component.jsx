import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.benefits}>
    <s.Container>
      <ul className={style.benefits__ul}>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>people_outline</s.Icon>
          <p className={style.benefits__p}>parceria com representantes globais</p>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>shopping_bag</s.Icon>
          <p className={style.benefits__p}>souvenier da família JRMod</p>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>verified</s.Icon>
          <p className={style.benefits__p}>pedais refinados para ouvidos exigentes</p>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>loyalty</s.Icon>
          <p className={style.benefits__p}>produto confeccionado com primazia e paixão</p>
        </li>
      </ul>
    </s.Container>
  </section>
