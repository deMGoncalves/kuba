import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default () =>
  <s.Module className={style.benefits}>
    <s.Container className={style.banner__container}>
      <ul className={style.benefits__ul}>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>users</s.Icon>
          <p className={style.benefits__p}>parceria com representantes globais</p>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>tag</s.Icon>
          <p className={style.benefits__p}>souvenier da família JRMod</p>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>check</s.Icon>
          <p className={style.benefits__p}>pedais refinados para ouvidos exigentes</p>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>heart</s.Icon>
          <p className={style.benefits__p}>produto confeccionado com primazia e paixão</p>
        </li>
      </ul>
    </s.Container>
  </s.Module>
